import React from "react";

export default function Template8({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6 font-chakra relative border-y-[12px] border-pink-500 overflow-hidden">
        <div className="max-w-5xl w-full relative z-10 flex flex-col md:flex-row items-center gap-10 bg-zinc-950 p-8 md:p-12 border border-zinc-800">
            <div className="w-48 h-48 md:w-64 md:h-64 relative group shrink-0">
                <div className="absolute inset-0 bg-pink-500 translate-x-3 translate-y-3"></div>
                <div className="absolute inset-0 bg-cyan-400 -translate-x-3 -translate-y-3"></div>
                <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover relative z-10 border-2 border-black mix-blend-normal" />
            </div>

            <div className="flex-1 w-full text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 relative break-words whitespace-normal leading-tight">
                    <span className="absolute -left-1 -top-1 text-pink-500 opacity-70 w-full">{val(member.name)}</span>
                    <span className="absolute left-1 top-1 text-cyan-400 opacity-70 w-full">{val(member.name)}</span>
                    <span className="relative z-10 text-white w-full">{val(member.name)}</span>
                </h1>
                {member.fav_quote && <p className="text-cyan-400 italic mb-8 border-l-2 border-pink-500 pl-4 break-words text-lg">"{member.fav_quote}"</p>}
                
                <div className="grid grid-cols-2 gap-4 w-full text-left mb-8">
                    <div className="bg-black border border-cyan-400 p-4"><span className="text-pink-500 text-xs font-bold uppercase mb-1 block">MBTI</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.mbti)}</span></div>
                    <div className="bg-black border border-cyan-400 p-4"><span className="text-pink-500 text-xs font-bold uppercase mb-1 block">Ennea</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.core)}</span></div>
                    <div className="bg-black border border-pink-500 p-4"><span className="text-cyan-400 text-xs font-bold uppercase mb-1 block">Tritype</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.tritype)}</span></div>
                    <div className="bg-black border border-pink-500 p-4"><span className="text-cyan-400 text-xs font-bold uppercase mb-1 block">Psyche</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.attitudinal_psyche)}</span></div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-pink-500 text-black flex items-center justify-center text-xl hover:bg-cyan-400 transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-pink-500 text-black flex items-center justify-center text-xl hover:bg-cyan-400 transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-pink-500 text-black flex items-center justify-center text-xl hover:bg-cyan-400 transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>
        </div>
    </section>
  );
}