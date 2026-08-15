'use client';

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function EnfjHelpBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
const [messages, setMessages] = useState<Message[]>([
     { role: 'assistant', content: 'Halo kak! Aku ENFJ Bot, asisten paling peduli di MyTypology! Ada yang bisa aku bantu hari ini?' }
]);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke bawah saat ada pesan baru
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch response');

      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Aduh maaf kak, koneksiku lagi terputus nih 😢 Coba lagi nanti ya!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
<div className="w-[320px] sm:w-[380px] h-[500px] max-h-[80vh] bg-zinc-950 border border-purple-500/30 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.2)] mb-4 flex flex-col overflow-hidden transition-all">          
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
                
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">ENFJ Bot</h3>
                <p className="text-[10px] text-purple-100 opacity-90 mt-0.5">Online & Ready to Help!</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-zinc-900/50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none'}`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 border border-zinc-700 p-3 rounded-2xl rounded-bl-none">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-zinc-950 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya ENFJ Bot..."
              disabled={isLoading}
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white px-3 py-2 text-sm rounded-xl focus:outline-none focus:border-purple-500 disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-purple-500 transition-colors disabled:opacity-50 shrink-0"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-transform hover:scale-110 ${isOpen ? 'bg-zinc-800 text-zinc-400 border border-zinc-700' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'}`}
      >
        {isOpen ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-comment-dots"></i>}
      </button>

    </div>
  );
}