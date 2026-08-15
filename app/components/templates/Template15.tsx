import React from "react";

export default function Template15({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-indigo-950 flex flex-col justify-end p-6 font-space relative overflow-hidden border-t-4 border-pink-500">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.3)_1px,transparent_1px)] bg-[size:50px_50px] transform perspective-[1000px] rotateX-[60deg] scale-150 origin-bottom"></div>
      
      <div className="max-w-6xl w-full mx-auto relative z-10 bg-indigo-900/90 backdrop-blur-xl border-2 border-cyan-400 p-8 md:p-14 shadow-[0_0_40px_rgba(34,211,238,0.4)] mb-10 flex flex-col md:flex-row items-center gap-10 rounded-2xl">
        <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-cyan-400 p-1 shrink-0 shadow-[0_0_30px_rgba(236,72,153,0.8)]">
          <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover sepia hue-rotate-[-50deg] saturate-200" />
        </div>
        
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4 break-words whitespace-normal leading-tight drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">{val(member.name)}</h1>
          {member.fav_quote && <p className="text-white font-bold italic mb-8 border-l-4 border-pink-500 pl-4 break-words text-lg drop-shadow-md">"{member.fav_quote}"</p>}
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-8">
            <div className="bg-indigo-950 border border-pink-500 p-4"><p className="text-pink-500 text-xs uppercase font-bold mb-1">MBTI</p><p className="text-2xl md:text-3xl font-black text-cyan-300 italic">{val(member.mbti)}</p></div>
            <div className="bg-indigo-950 border border-pink-500 p-4"><p className="text-pink-500 text-xs uppercase font-bold mb-1">ENNEA</p><p className="text-2xl md:text-3xl font-black text-cyan-300 italic">{val(member.enneagram?.core)}</p></div>
            <div className="bg-indigo-950 border border-pink-500 p-4"><p className="text-pink-500 text-xs uppercase font-bold mb-1">TRI</p><p className="text-2xl md:text-3xl font-black text-cyan-300 italic">{val(member.enneagram?.tritype)}</p></div>
            <div className="bg-indigo-950 border border-pink-500 p-4"><p className="text-pink-500 text-xs uppercase font-bold mb-1">PSY</p><p className="text-2xl md:text-3xl font-black text-cyan-300 italic">{val(member.attitudinal_psyche)}</p></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
              {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition-colors"><i className="fa-brands fa-instagram"></i></a>}
              {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
          </div>
        </div>
      </div>
    </section>
  );
}