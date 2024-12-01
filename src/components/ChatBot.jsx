import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const generateAnswer = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setMessages((prev) => [...prev, { role: "assistant", content: "typing..." }]);
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: input }] }],
        },
      });

      const botMessage = {
        role: "assistant",
        content: response.data.candidates[0].content.parts[0].text,
      };
      setMessages((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "assistant", content: "Error: Unable to fetch an answer." },
      ]);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col flex-1 p-6 space-y-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto space-y-4 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md px-4 py-3 rounded-lg shadow ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-gray-900 p-4 flex items-center space-x-4 border-t border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={generateAnswer}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
