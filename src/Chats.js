import React from 'react'
import Chat from './Chat'
import "./Chats.css"

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you😁"
        timestamp="35 minutes ago"
        profilePic=""
      />
      <Chat
        name="Ellen"
        message="Whats up?"
        timestamp="1h ago"
        profilePic=""
      />
      <Chat
        name="Sandra"
        message="Hi✋"
        timestamp="3 days ago"
        profilePic=""
      />
      <Chat
        name="Natasha"
        message="Do your best😎"
        timestamp="1 week ago"
        profilePic=""
      />
    </div>
  )
}

export default Chats
