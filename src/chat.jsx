import { useState, useEffect, useRef } from "react";
import "./chat.css";

function ChatBox({ currentUser }) {
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chats")) || [];
    setChats(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMsg = () => {
    if (!msg.trim()) return;

    const userMessage = {
      from: currentUser.name,
      message: msg,
    };

    setChats((prev) => [...prev, userMessage]);
    setMsg("");

    // 🔥 Auto reply after 1 sec
    setTimeout(() => {
      const autoReply = {
        from: "Mentor",
        message: "Thanks for your message. I will respond shortly.",
      };
      setChats((prev) => [...prev, autoReply]);
    }, 1000);
  };

  if (!currentUser) return <h2>Please login to chat</h2>;

  return (
    <div className="chat-box">
      <h2>Chat</h2>

      <div className="chat-window">
        {chats.map((c, i) => (
          <div
            key={i}
            className={
              c.from === currentUser.name ? "my-msg" : "other-msg"
            }
          >
            <b>{c.from}</b>
            <p>{c.message}</p>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMsg()}
        />
        <button onClick={sendMsg}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;