import React, { useState, useRef, useEffect } from 'react';
import chatbotData from './bot.json'; // Import predefined Q&A responses
import ChatImg from "../assets/chatbot.gif"; // Chatbot icon for header
import './Chatbot.css'; // Import CSS for styling

// Function to fetch a response from the bot based on user input
function getBotResponse(message) {
  const key = message.toLowerCase().trim(); // Normalize the input
  return chatbotData[key] || "Sorry, I didn't understand that."; // Default fallback response
}

function Chatbot() {
  // State to hold all messages in the chat (both user and bot)
  const [messages, setMessages] = useState([]);

  // State to hold the current input typed by the user
  const [input, setInput] = useState("");

  // State to control if the chatbot window is minimized or not
  const [minimized, setMinimized] = useState(false);

  // Reference to scroll the chatbox to the latest message
  const messagesEndRef = useRef(null);

  // Reference to focus the input field when chatbot is open
  const inputRef = useRef(null);

  // Scroll to bottom automatically when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus on the input field when chatbot is maximized
  useEffect(() => {
    if (!minimized) {
      inputRef.current?.focus();
    }
  }, [minimized]);

  // Function to send the user message and get bot response
  const handleSend = () => {
    if (!input.trim()) return; // If input is empty, do nothing

    // Create a user message object
    const userMsg = { from: "user", text: input };

    // Get the bot's response from the JSON
    const botMsg = { from: "bot", text: getBotResponse(input) };

    // Add both messages to the chat
    setMessages(prev => [...prev, userMsg, botMsg]);

    // Clear the input field
    setInput("");
  };

  return (
    <div className={minimized ? "chatbot-wrapper chatbot-minimized" : "chatbot-wrapper"}>

      {/* Header with chatbot icon - toggles minimize/maximize */}
      <div
        className="chatbot-header"
        onClick={() => setMinimized(!minimized)}
        title={minimized ? "Open Chatbot" : "Minimize Chatbot"}
      >
        <img src={ChatImg} alt="Chatbot" />
      </div>

      {/* Chatbox area only shows when not minimized */}
      {!minimized && (
        <>
          {/* Chat log area */}
          <div
            className="chatbot-chatbox"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {/* Greeting if no messages yet */}
            {messages.length === 0 && (
              <p className="chatbot-empty">Say hi! 👋</p>
            )}

            {/* Render each message */}
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.from}`}>
                <div
                  className={`chatbot-bubble ${msg.from}`}
                  dangerouslySetInnerHTML={msg.from === "bot" ? { __html: msg.text } : undefined}
                >
                  {/* Only show user message if not bot */}
                  {msg.from === "user" ? msg.text : null}
                </div>
              </div>
            ))}

            {/* Scroll anchor to bottom */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input and send button */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="chatbot-input"
              aria-label="Message input"
            />
            <button
              onClick={handleSend}
              className="chatbot-send-button"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbot;