import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-8 duration-700">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          (Or rather, about this unnecessarily elaborate system).
        </p>
      </div>

      {/* Story Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-20 text-zinc-700 dark:text-zinc-300">
        <p>
          Welcome to the control room. <strong>MyTypology</strong>. This entire operation is powered by a world-class, multidisciplinary team consisting entirely of myself, my caffeinated brain, and an absolute refusal to let unorganized data roam free in the wild
        </p>

      </div>

      {/* The System's Typology Card */}
      <div className="bg-zinc-950 text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-zinc-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center border-b border-zinc-800 pb-4">
          The Entity's Profile
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-40 h-40 shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center border-4 border-zinc-950">
              <i className="fa-solid fa-server text-5xl text-white"></i>
            </div>
          </div>
          
          <div className="flex-1 w-full text-center md:text-left">
            <p className="text-zinc-400 italic mb-6">"I don't judge you. My algorithms do."</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">MBTI</p>
                <p className="text-2xl font-black">ISTJ</p>
                <p className="text-xs text-zinc-400 mt-1">Cold, structured, loves data.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Enneagram</p>
                <p className="text-2xl font-black">6w5</p>
                <p className="text-xs text-zinc-400 mt-1">Hoards your information safely.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Tritype</p>
                <p className="text-2xl font-black">513</p>
                <p className="text-xs text-zinc-400 mt-1">Knowledge, Perfection, Execution.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Temperament</p>
                <p className="text-xl font-black leading-tight">Melancholic</p>
                <p className="text-xs text-zinc-400 mt-1">Sighs when you mistype yourself.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}