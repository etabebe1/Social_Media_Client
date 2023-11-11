import "./messenger.css";
import NavBar from "../../components/NavForApp/Navbar";
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/Chat/ChatOnline";

function Messenger() {
  return (
    <>
      <NavBar></NavBar>
      <div className="chat-container">
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
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
            <Conversation></Conversation>
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <Message></Message>
            <Message own={true}></Message>
            <Message own={true}></Message>
            <Message></Message>
            <Message own={true}></Message>

            <Message></Message>
            <Message></Message>
            <Message></Message>
          </div>
          <div className="chat-box-textarea">
            <textarea
              name="message-input"
              className="message-input"
              placeholder="Message"
            ></textarea>

            <button className="send-btn">Send</button>
          </div>
        </div>
        <div className="online-user">
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
