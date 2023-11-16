import { useEffect, useContext, useState, useRef } from "react";
import "./messenger.css";
import NavBar from "../../components/NavForApp/Navbar";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/Chat/ChatOnline";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { useForkRef } from "@mui/material";

function Messenger() {
  const { user } = useContext(AuthContext);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const scrollRef = useRef();
const socket = useRef("ws://localhost:8900")
  // const messageValue = useRef();

  // console.log(user);
  // console.log(conversation);
  // if (currentChat) {
  //   console.log(currentChat._id);
  // }
  // if (messages.length > 0) {
  //   console.log(messages);
  // }

  // ::::::::::socket connection:::::::::: //

 

  // :::::::::::fetching conversations::::::::::: //
  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/conversation/${user._id}`
        );
        setConversation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversation();
  }, [user]);

  // fetching messages of a conversation
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/message/${currentChat?._id}`
        );
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessage();
  }, [currentChat]);

  const handleSendMessage = async (evt) => {
    evt.preventDefault();
    if (!currentChat) {
      return alert("Please select chat");
    }

    if (!messageValue) {
      return alert("Cannot send empty message");
    }

    const newMessage = {
      conversationID: currentChat._id,
      senderID: user._id,
      text: messageValue,
    };

    try {
      const response = await axios.post(
        `http://localhost:8800/api/message`,
        newMessage
      );
      setMessages([...messages, response.data]);
      setMessageValue("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <NavBar></NavBar>
      <div className="chat-container text-gray-900">
        <div className="user-container">
          <input
            type="text"
            name="search-friend"
            id="search-friend"
            className="search-friend flex "
            placeholder="Search for friends"
          />

          <hr />

          <div className="user-wrapper">
            {conversation.length > 0 &&
              conversation.map((conversation) => {
                return (
                  <div
                    className="conversation-wrapper"
                    key={conversation._id}
                    onClick={() => setCurrentChat(conversation)}
                  >
                    <Conversation
                      conversation={conversation}
                      currentUser={user}
                    ></Conversation>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="chat-box">
          {currentChat ? (
            <>
              <div className="chat-box-wrapper">
                {messages.map((message) => {
                  const own = user._id === message.senderID;
                  return (
                    <div ref={scrollRef} key={message._id}>
                      <Message message={message} own={own}></Message>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="chat-box-wrapper flex text-center justify-center font-bold text-gray-300 text-5xl">
              Open conversation to start a chat
            </div>
          )}

          <div className="chat-box-textarea">
            <textarea
              name="message-input"
              className="message-input"
              placeholder="Message..."
              onChange={(e) => setMessageValue(e.target.value)}
              // onChange={(e) => console.log(e.target.value)}
              value={messageValue}
            ></textarea>

            <button className="send-btn" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
        <div className="online-user flex flex-col">
          <span className=" text-center mb-5 font-semibold text-gray-700">
            Online Users
          </span>
          <div className="online-user-wrapper">
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
            <ChatOnline></ChatOnline>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
