import React, { useState } from 'react'
import "./ChatScreen.css"
import { Avatar } from '@material-ui/core';

function ChatScreen() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
  { name: "Sarah", message: "Whats up?", image: "https://i.pinimg.com/originals/c5/f9/c5/c5f9c5aba9037a055730541bb42887be.jpg" },
  { name: "Sarah", message: "Hey! how are you😁", image: "https://i.pinimg.com/originals/c5/f9/c5/c5f9c5aba9037a055730541bb42887be.jpg" },
  { message: "Hi! Sarah", image: "" },])

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH SARAH ON 26/10/20</p>
      {messages.map((message) => (
        message.name ? (
        <div className="chatScreen__message">
          <Avatar className="chatScreen__image" src={message.image} />
          <p className="chatScreen__text">{message.message}</p>
        </div>
        ) : (
        <div className="chatScreen__message">
          <p className="chatScreen__textUser">{message.message}</p>
        </div>
        )
      ))}

      <div>
        <form className="chatScreen__input">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message..." />
          <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen;