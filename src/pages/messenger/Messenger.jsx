import React, { useEffect, useContext, useState, useRef } from "react";
import "./messenger.css";
import NavBar from "../../components/NavForApp/Navbar";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/Chat/Online-user";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

function Messenger() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivedMessage, setArrivedMessage] = useState(null);
  const [messageValue, setMessageValue] = useState("");
  const scrollRef = useRef();
  const { user } = useContext(AuthContext);
  const socket = useRef();

  // LOGS: here
  // onlineUsers.length > 0 && console.log(onlineUsers);

  //* ::::::::::socket connection:::::::::: *//
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivedMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (
      arrivedMessage &&
      currentChat?.members.includes(arrivedMessage.sender)
    ) {
      setMessages((prev) => [...prev, arrivedMessage]);
    }
  }, [arrivedMessage, currentChat]);

  //* :::::::::::fetching conversations::::::::::: *//
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

    const receiverID = currentChat.members.find(
      (member) => member !== user._id
    );

    // FIXME: instant message not working
    // DONE
    // socket sending message info for client side

    socket.current.emit("sendMessage", {
      senderID: user._id,
      receiverID,
      text: messageValue,
    });

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
            {onlineUsers.length && <ChatOnline onlineUsers={onlineUsers} currentUserID={user._id} setCurrentChat={setCurrentChat}></ChatOnline>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
