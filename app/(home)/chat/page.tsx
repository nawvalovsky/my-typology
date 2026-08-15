'use client';

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

// Avatar foto wanita dari Unsplash
const BOT_AVATAR = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80";

export default function ChatWithEnfjPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Halo kak! Aku Naya, asisten ENFJ paling peduli di MyTypology! Ada yang bisa aku bantu hari ini?' }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false); // State untuk Anti-Spam
  const [cooldownTime, setCooldownTime] = useState(0); // State untuk timer hitung mundur
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cegah spam: block jika masih loading atau sedang cooldown
    if (!input.trim() || isLoading || isCooldown) return;

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
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: 'assistant', content: `[Error: ${error.message}] Aduh maaf kak, koneksiku terputus!` }]);
    } finally {
      setIsLoading(false);
      
      // MULAI FITUR ANTI-SPAM (Jeda 3 Detik)
      setIsCooldown(true);
      let timeLeft = 3;
      setCooldownTime(timeLeft);
      
      const timer = setInterval(() => {
          timeLeft -= 1;
          setCooldownTime(timeLeft);
          if (timeLeft <= 0) {
              clearInterval(timer);
              setIsCooldown(false);
          }
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full h-[85vh] flex flex-col animate-in fade-in duration-500">
      <div className="text-center mb-6 shrink-0">
        <h1 className="text-4xl font-black tracking-tight mb-2">
          Chat with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Naya</span>
        </h1>
      </div>

      <div className="flex-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* HEADER DENGAN FOTO DAN NAMA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center gap-3 text-white shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 shadow-inner shrink-0">
            <img src={BOT_AVATAR} alt="Naya Bot" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Naya (ENFJ)</h3>
            <p className="text-xs text-purple-100 opacity-90">{isCooldown ? 'Tarik napas sejenak...' : 'Online & Siap Mendengarkan'}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* Avatar untuk pesan balasan bot */}
              {msg.role === 'assistant' && (
                  <img src={BOT_AVATAR} alt="Avatar" className="w-8 h-8 rounded-full mr-2 self-end mb-1 border border-zinc-300 dark:border-zinc-700" />
              )}
              
              <div className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-sm md:text-base ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-bl-none shadow-sm'}`}>
                <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          
          {/* Efek Titik-titik Mengetik */}
          {isLoading && (
            <div className="flex justify-start items-end">
              <img src={BOT_AVATAR} alt="Avatar" className="w-8 h-8 rounded-full mr-2 mb-1 border border-zinc-300 dark:border-zinc-700" />
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-bl-none border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="flex gap-2">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* KOLOM INPUT DENGAN LOGIKA DISABLED */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex gap-3 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isCooldown ? `Tunggu ${cooldownTime} detik...` : "Ketik pesanmu di sini..."}
            disabled={isLoading || isCooldown} 
            className="flex-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-5 py-3 rounded-xl focus:outline-none focus:border-purple-500 disabled:opacity-60 disabled:cursor-not-allowed"
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isLoading || isCooldown}
            className="bg-purple-600 text-white px-6 md:px-8 py-3 rounded-xl hover:bg-purple-500 transition-colors flex items-center justify-center font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCooldown ? <i className="fa-solid fa-hourglass-half"></i> : 'Kirim'}
          </button>
        </form>

      </div>
    </div>
  );
}