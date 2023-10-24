import React, { useEffect, useState } from "react";
import axios from "axios";
function ChatPage() {
  const [chats, setChats] = useState();
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      ChatPage
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
