import React from "react";

export default function Template10({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-neutral-300 flex items-center justify-center p-6 font-space border-y-[12px] border-magenta-600 bg-stripes-yellow">
        <div className="max-w-6xl w-full bg-white border-4 border-black p-2 md:p-4 shadow-[12px_12px_0_0_#000] md:shadow-[20px_20px_0_0_#000]">
            <div className="border-4 border-black p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 bg-neutral-100">
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 bg-black p-2 relative shadow-[10px_10px_0_0_#e11d48]">
                    <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover border-2 border-neutral-300 bg-blue-100 filter contrast-125" />
                </div>
                
                <div className="flex-1 w-full flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-black uppercase mb-4 bg-yellow-400 inline-block px-4 py-2 border-4 border-black break-words whitespace-normal leading-tight">{val(member.name)}</h1>
                    {member.fav_quote && <p className="text-rose-600 font-bold italic text-lg mb-8 break-words bg-white border-2 border-black p-3 inline-block">"{member.fav_quote}"</p>}
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left mb-8">
                        <div className="bg-black text-white p-4 border-4 border-transparent hover:border-yellow-400"><span className="text-rose-500 font-bold text-xs uppercase mb-1 block">MBTI</span><span className="text-2xl md:text-3xl font-black">{val(member.mbti)}</span></div>
                        <div className="bg-black text-white p-4 border-4 border-transparent hover:border-yellow-400"><span className="text-rose-500 font-bold text-xs uppercase mb-1 block">ENNEA</span><span className="text-2xl md:text-3xl font-black">{val(member.enneagram?.core)}</span></div>
                        <div className="bg-black text-white p-4 border-4 border-transparent hover:border-yellow-400"><span className="text-rose-500 font-bold text-xs uppercase mb-1 block">TRI</span><span className="text-2xl md:text-3xl font-black">{val(member.enneagram?.tritype)}</span></div>
                        <div className="bg-black text-white p-4 border-4 border-transparent hover:border-yellow-400"><span className="text-rose-500 font-bold text-xs uppercase mb-1 block">PSY</span><span className="text-2xl md:text-3xl font-black">{val(member.attitudinal_psyche)}</span></div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center text-xl hover:bg-yellow-400 transition-colors shadow-[4px_4px_0_0_#000]"><i className="fa-brands fa-facebook-f"></i></a>}
                        {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center text-xl hover:bg-yellow-400 transition-colors shadow-[4px_4px_0_0_#000]"><i className="fa-brands fa-instagram"></i></a>}
                        {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-white text-black border-4 border-black flex items-center justify-center text-xl hover:bg-yellow-400 transition-colors shadow-[4px_4px_0_0_#000]"><i className="fa-brands fa-tiktok"></i></a>}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}