import React from "react";

export default function Template13({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6 font-mono text-green-500">
      <div className="max-w-4xl w-full border border-green-500/50 p-6 md:p-12 shadow-[0_0_20px_rgba(34,197,94,0.15)] bg-black/90">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="w-40 h-40 md:w-56 md:h-56 border border-green-500 p-1 shrink-0 mx-auto md:mx-0">
            <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover grayscale opacity-80 sepia hue-rotate-120" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 break-words whitespace-normal leading-tight text-white drop-shadow-[0_0_5px_#22c55e]">&gt; {val(member.name)}</h1>
            {member.fav_quote && <p className="text-green-300 italic mb-6 break-words text-lg">"{member.fav_quote}"</p>}
            <div className="flex gap-4 justify-center md:justify-start">
                {member.socials?.facebook && <a href={member.socials.facebook} className="text-green-500 hover:text-white text-xl"><i className="fa-brands fa-facebook-f"></i></a>}
                {member.socials?.instagram && <a href={member.socials.instagram} className="text-green-500 hover:text-white text-xl"><i className="fa-brands fa-instagram"></i></a>}
                {member.socials?.tiktok && <a href={member.socials.tiktok} className="text-green-500 hover:text-white text-xl"><i className="fa-brands fa-tiktok"></i></a>}
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-500/50 pt-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-base md:text-lg">
            <li className="flex justify-between border-b border-green-900 pb-2"><span className="opacity-70">MBTI_TYPE</span><span className="font-bold text-white">{val(member.mbti)}</span></li>
            <li className="flex justify-between border-b border-green-900 pb-2"><span className="opacity-70">ENNEAGRAM_CORE</span><span className="font-bold text-white">{val(member.enneagram?.core)}</span></li>
            <li className="flex justify-between border-b border-green-900 pb-2"><span className="opacity-70">TRITYPE_HASH</span><span className="font-bold text-white">{val(member.enneagram?.tritype)}</span></li>
            <li className="flex justify-between border-b border-green-900 pb-2"><span className="opacity-70">PSYCHE_LOGIC</span><span className="font-bold text-white">{val(member.attitudinal_psyche)}</span></li>
          </ul>
        </div>
        <p className="text-lg mt-8 opacity-70 animate-pulse text-green-400">_</p>
      </div>
    </section>
  );
}