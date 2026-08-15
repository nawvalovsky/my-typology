"use client";

import React, { useState } from "react";
import Link from "next/link";
import dummyData from "../../data/dummy.json";
import Template1 from "../../components/templates/Template1";
import Template2 from "../../components/templates/Template2";
import Template3 from "../../components/templates/Template3";
import Template4 from "../../components/templates/Template4";
import Template5 from "../../components/templates/Template5";
import Template6 from "../../components/templates/Template6";
import Template7 from "../../components/templates/Template7";
import Template8 from "../../components/templates/Template8";
import Template9 from "../../components/templates/Template9";
import Template10 from "../../components/templates/Template10";
import Template11 from "../../components/templates/Template11";
import Template12 from "../../components/templates/Template12";
import Template13 from "../../components/templates/Template13";
import Template14 from "../../components/templates/Template14";
import Template15 from "../../components/templates/Template15";

const templateList = [
  { id: 1, name: "Neo-Constructivism", Component: Template1, color: "hover:bg-red-600 hover:text-white" },
  { id: 2, name: "Acid Cyberpunk", Component: Template2, color: "hover:bg-lime-400 hover:text-black" },
  { id: 3, name: "Pop Art Split", Component: Template3, color: "hover:bg-yellow-400 hover:text-black" },
  { id: 4, name: "Streetwear Grunge", Component: Template4, color: "hover:bg-orange-500 hover:text-black" },
  { id: 5, name: "Retro Arcade", Component: Template5, color: "hover:bg-fuchsia-500 hover:text-white" },
  { id: 6, name: "Pure Brutalist", Component: Template6, color: "hover:bg-lime-300 hover:text-black" },
  { id: 7, name: "Teal & Orange", Component: Template7, color: "hover:bg-teal-500 hover:text-white" },
  { id: 8, name: "Glitch Vapor", Component: Template8, color: "hover:bg-pink-500 hover:text-black" },
  { id: 9, name: "Ultra-Violet Lime", Component: Template9, color: "hover:bg-purple-600 hover:text-white" },
  { id: 10, name: "Y2K High Contrast", Component: Template10, color: "hover:bg-rose-500 hover:text-white" },
  { id: 11, name: "Cyber-Goth", Component: Template11, color: "hover:bg-lime-400 hover:text-black" },
  { id: 12, name: "Bauhaus Minimal", Component: Template12, color: "hover:bg-red-500 hover:text-white" },
  { id: 13, name: "Matrix Terminal", Component: Template13, color: "hover:bg-green-500 hover:text-black" },
  { id: 14, name: "Frutiger Aero", Component: Template14, color: "hover:bg-sky-400 hover:text-black" },
  { id: 15, name: "Synthwave Outrun", Component: Template15, color: "hover:bg-cyan-400 hover:text-black" },
];

export default function TemplatesShowcasePage() {
  // Simple state, langsung true dari awal
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white relative font-space -mx-4 sm:-mx-6 -my-8 pb-16">
      
      {/* 
        SIMPLE BOTTOM BANNER 
        Selalu muncul di layar kecil (mobile), hilang otomatis di layar besar (md) 
      */}
      {showAlert && (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-yellow-400 text-black p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3 sm:flex-row sm:items-center justify-between border-t-4 border-black transition-all">
          <div className="flex items-start sm:items-center gap-3">
            <span className="text-2xl animate-bounce">📱</span>
            <p className="text-xs sm:text-sm font-bold font-sans leading-tight">
              <strong>Aesthetic Hazard:</strong> Squinting? Turn on <span className="bg-black text-yellow-400 px-1.5 py-0.5 rounded uppercase text-[10px]">Desktop Site</span> in your browser. These layouts are too majestic for tiny screens.
            </p>
          </div>
        </div>
      )}

      {/* Quick Jump Bar */}
      <nav className="sticky top-14 sm:top-16 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800 px-4 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="font-black text-xs uppercase tracking-widest text-zinc-400 shrink-0">
            Quick Jump:
          </div>
          <div className="flex items-center gap-2 text-xs font-mono shrink-0">
            {templateList.map((t) => (
              <a
                key={t.id}
                href={`#t${t.id}`}
                className={`px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded transition ${t.color}`}
              >
                {t.id < 10 ? `0${t.id}` : t.id}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 15 Templates Showcase */}
      <div className="flex flex-col divide-y-8 divide-zinc-900">
        {templateList.map((t) => {
          const memberData = dummyData.find((m) => m.template === t.id) || dummyData[0];
          const TemplateComponent = t.Component;

          return (
            <section key={t.id} id={`t${t.id}`} className="relative group scroll-mt-28">
              {/* Badge Template */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30 pointer-events-none flex items-center bg-black border-2 border-white px-3 py-1 shadow-[4px_4px_0_0_#facc15] font-mono text-[11px] md:text-xs font-black uppercase tracking-wider text-white">
                <span className="bg-yellow-400 text-black px-1.5 py-0.5 mr-2 font-bold">
                  #{t.id < 10 ? `0${t.id}` : t.id}
                </span>
                <span className="text-zinc-200">{t.name}</span>
              </div>

              <TemplateComponent member={memberData} />
            </section>
          );
        })}
      </div>

      {/* Back Button */}
      <div className="py-16 text-center border-t border-zinc-800 bg-zinc-950">
        <Link 
          href="/" 
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
        >
          ← Back to Hub
        </Link>
      </div>

    </div>
  );
}