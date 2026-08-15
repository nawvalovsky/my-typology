import React from "react";

export default function Template11({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center p-6 font-mono overflow-hidden">
      <div className="max-w-5xl w-full border border-zinc-800 bg-black/80 p-8 md:p-14 relative shadow-[0_0_40px_rgba(217,70,239,0.2)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-lime-400"></div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 border border-fuchsia-500 p-2 shrink-0 bg-zinc-900 shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover grayscale opacity-90 mix-blend-screen" />
          </div>
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 break-words whitespace-normal leading-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{val(member.name)}</h1>
            {member.fav_quote && <p className="text-lime-400 italic mb-8 border-l-2 border-fuchsia-500 pl-4 break-words text-lg">"{member.fav_quote}"</p>}
            
            <div className="grid grid-cols-2 gap-6 text-left mb-8">
              <div className="border-l border-lime-400 pl-4"><span className="text-[10px] text-fuchsia-400 block mb-1">MBTI_CLASS</span><span className="text-2xl md:text-3xl font-bold text-white">{val(member.mbti)}</span></div>
              <div className="border-l border-lime-400 pl-4"><span className="text-[10px] text-fuchsia-400 block mb-1">ENNEA_CORE</span><span className="text-2xl md:text-3xl font-bold text-white">{val(member.enneagram?.core)}</span></div>
              <div className="border-l border-lime-400 pl-4"><span className="text-[10px] text-fuchsia-400 block mb-1">TRITYPE_SYS</span><span className="text-2xl md:text-3xl font-bold text-white">{val(member.enneagram?.tritype)}</span></div>
              <div className="border-l border-lime-400 pl-4"><span className="text-[10px] text-fuchsia-400 block mb-1">PSYCHE_MAP</span><span className="text-2xl md:text-3xl font-bold text-white">{val(member.attitudinal_psyche)}</span></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {member.socials?.facebook && <a href={member.socials.facebook} className="text-lime-400 hover:text-fuchsia-500 text-2xl transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                {member.socials?.instagram && <a href={member.socials.instagram} className="text-lime-400 hover:text-fuchsia-500 text-2xl transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                {member.socials?.tiktok && <a href={member.socials.tiktok} className="text-lime-400 hover:text-fuchsia-500 text-2xl transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}