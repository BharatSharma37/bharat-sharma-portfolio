import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, X, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';

export default function AIChatbotPreview({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Bharat's Gemini AI Assistant simulator. Ask me about Bharat's MERN stack architecture, full-stack projects, DSA problem solving, or training at QSpiders!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestedPrompts = [
    "Tell me about the Airbnb Clone architecture",
    "What technologies does Bharat use in MERN stack?",
    "How does Gemini API integrate with React?",
    "What is Bharat's background and training?",
  ];

  const simulateResponse = (userPrompt) => {
    setIsTyping(true);
    const query = userPrompt.toLowerCase();

    let reply = "Bharat Sharma is a Full-Stack Developer and final-year B.Tech IT student specializing in MongoDB, Express.js, React.js, and Node.js with Gemini API integration.";

    if (query.includes('airbnb') || query.includes('clone') || query.includes('property')) {
      reply = "The Airbnb Clone was architected using MongoDB, Express.js, Node.js, and EJS. It features a complete RESTful CRUD workflow for listings, dynamic property forms, Mongoose schema modeling, and server-side routing.";
    } else if (query.includes('tech') || query.includes('stack') || query.includes('mern')) {
      reply = "Bharat's primary technical stack is MERN: React.js on the frontend, Node.js and Express.js on the backend, MongoDB for NoSQL document storage, and Tailwind CSS / Bootstrap for responsive styling.";
    } else if (query.includes('gemini') || query.includes('ai') || query.includes('chatbot')) {
      reply = "The AI-Powered Chatbot leverages React.js and the Google Gemini API with asynchronous fetching, custom React Hooks for conversational state, and simulated real-time streaming tokens.";
    } else if (query.includes('background') || query.includes('qspiders') || query.includes('training') || query.includes('education')) {
      reply = "Bharat is currently completing MERN Stack Developer Training at QSpiders (Noida, UP) and is a final-year B.Tech Information Technology student with certifications in MERN and Java DSA (Sigma Batch · Apna College).";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: 'bot', text: reply },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: text.trim() },
    ]);
    setInput('');
    simulateResponse(text);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#0B2112] border border-[#C7FF2F]/30 text-[#C7FF2F]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-[#F5F5F5]">
                  Gemini AI Assistant Simulator
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#0B2112] text-[10px] font-mono text-[#C7FF2F] border border-[#C7FF2F]/30">
                  LIVE
                </span>
              </div>
              <span className="text-[11px] text-[#6B6B6B] font-mono">
                Project 02 Interactive Demo · React + Gemini API
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A5A5A5] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isBot ? 'items-start' : 'items-end flex-row-reverse'}`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs ${
                    isBot ? 'bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30' : 'bg-white/10 text-[#F5F5F5]'
                  }`}
                >
                  {isBot ? <Sparkles className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isBot
                      ? 'bg-[#161616] border border-white/5 text-[#F5F5F5] rounded-tl-none'
                      : 'bg-[#C7FF2F] text-[#0D0D0D] font-medium rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0B2112] border border-[#C7FF2F]/30 flex items-center justify-center text-[#C7FF2F]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-[#161616] border border-white/5 flex items-center gap-1.5 text-xs text-[#A5A5A5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 sm:px-6 py-2 border-t border-white/5 bg-[#0D0D0D] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-mono text-[#6B6B6B] flex-shrink-0 uppercase">Try:</span>
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#0B2112] border border-white/10 hover:border-[#C7FF2F]/40 text-[11px] text-[#A5A5A5] hover:text-[#C7FF2F] whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-white/10 bg-[#111111]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about MERN stack, Airbnb clone, algorithms..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C7FF2F]/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-4 py-2.5 rounded-xl bg-[#C7FF2F] text-[#0D0D0D] font-bold hover:bg-[#A8FF00] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
