import React from "react";

export default function Template5({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-6 md:p-10 font-chakra relative border-y-[10px] border-fuchsia-500 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(236,72,153,0.2)_2px,transparent_2px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-4xl w-full bg-fuchsia-600 border-8 border-cyan-400 p-2 shadow-[0_0_40px_rgba(34,211,238,0.8)] relative z-10 transform md:-skew-x-3">
            <div className="bg-black p-8 md:p-12 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-black text-fuchsia-500 mb-6 text-center drop-shadow-[0_0_10px_rgba(236,72,153,1)] break-words whitespace-normal leading-tight w-full">{val(member.name)}</h1>
                {member.fav_quote && <p className="text-cyan-400 font-bold text-center italic mb-10 max-w-lg break-words text-lg">"{member.fav_quote}"</p>}

                <div className="flex flex-col md:flex-row gap-10 items-center w-full">
                    <div className="w-48 h-48 md:w-56 md:h-56 border-4 border-fuchsia-500 p-2 bg-blue-950 shrink-0 transform md:skew-x-3 shadow-[8px_8px_0_0_#22d3ee]">
                        <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 w-full grid grid-cols-2 gap-4 transform md:skew-x-3 text-left">
                        <div className="bg-blue-900 border-l-8 border-cyan-400 p-4 shadow-[4px_4px_0_0_#ec4899]"><span className="text-fuchsia-400 font-bold uppercase text-xs block">MBTI</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.mbti)}</span></div>
                        <div className="bg-blue-900 border-l-8 border-cyan-400 p-4 shadow-[4px_4px_0_0_#ec4899]"><span className="text-fuchsia-400 font-bold uppercase text-xs block">ENNEA</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.core)}</span></div>
                        <div className="bg-blue-900 border-l-8 border-cyan-400 p-4 shadow-[4px_4px_0_0_#ec4899]"><span className="text-fuchsia-400 font-bold uppercase text-xs block">TRI</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.tritype)}</span></div>
                        <div className="bg-blue-900 border-l-8 border-cyan-400 p-4 shadow-[4px_4px_0_0_#ec4899]"><span className="text-fuchsia-400 font-bold uppercase text-xs block">PSYCHE</span><span className="text-2xl md:text-3xl font-black text-white">{val(member.attitudinal_psyche)}</span></div>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 transform md:skew-x-3 justify-center w-full">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-cyan-400 text-black flex items-center justify-center text-xl hover:bg-fuchsia-500 hover:text-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-cyan-400 text-black flex items-center justify-center text-xl hover:bg-fuchsia-500 hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-cyan-400 text-black flex items-center justify-center text-xl hover:bg-fuchsia-500 hover:text-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>
        </div>
    </section>
  );
}