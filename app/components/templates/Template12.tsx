import React from "react";

export default function Template12({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-[#f4f4f0] flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row border-4 border-black">
        <div className="w-full md:w-2/5 bg-[#e63946] border-b-4 md:border-b-0 md:border-r-4 border-black p-10 flex flex-col justify-center items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-black overflow-hidden bg-[#a8dadc] mb-8 shrink-0">
            <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight break-words whitespace-normal text-center w-full leading-none">{val(member.name)}</h1>
        </div>
        <div className="w-full md:w-3/5 bg-white p-8 md:p-14 flex flex-col justify-center">
          {member.fav_quote && <p className="text-xl md:text-2xl font-bold italic text-black mb-10 break-words border-l-8 border-[#fca311] pl-6">"{member.fav_quote}"</p>}
          <div className="grid grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-[#f1faee] border-4 border-black p-4 md:p-6"><p className="text-xs font-bold uppercase mb-2 text-black">Base</p><p className="text-3xl md:text-4xl font-black text-[#1d3557]">{val(member.mbti)}</p></div>
            <div className="bg-[#a8dadc] border-4 border-black p-4 md:p-6"><p className="text-xs font-bold uppercase mb-2 text-black">Core</p><p className="text-3xl md:text-4xl font-black text-[#1d3557]">{val(member.enneagram?.core)}</p></div>
            <div className="bg-[#457b9d] border-4 border-black p-4 md:p-6"><p className="text-xs font-bold uppercase mb-2 text-white">Tritype</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.enneagram?.tritype)}</p></div>
            <div className="bg-[#1d3557] border-4 border-black p-4 md:p-6"><p className="text-xs font-bold uppercase mb-2 text-white">Psyche</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.attitudinal_psyche)}</p></div>
          </div>
          <div className="flex gap-4">
              {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-[#fca311] text-black border-4 border-black flex items-center justify-center text-xl hover:bg-black hover:text-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
              {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-[#fca311] text-black border-4 border-black flex items-center justify-center text-xl hover:bg-black hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>}
              {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-[#fca311] text-black border-4 border-black flex items-center justify-center text-xl hover:bg-black hover:text-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
          </div>
        </div>
      </div>
    </section>
  );
}