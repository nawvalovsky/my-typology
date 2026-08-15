import React from "react";

export default function Template1({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center p-6 md:p-16 border-b-[16px] border-red-600 font-syne relative overflow-hidden">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            <div className="md:col-span-5 bg-red-600 p-8 flex flex-col justify-center items-center shadow-[16px_16px_0_0_#ffffff]">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-black p-4 rotate-3 hover:rotate-0 transition-transform">
                    <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover grayscale-0 filter contrast-125 border-4 border-white" />
                </div>
            </div>
            
            <div className="md:col-span-7 flex flex-col justify-center bg-white text-black p-8 md:p-16 shadow-[16px_16px_0_0_#dc2626]">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 break-words whitespace-normal leading-tight text-black">{val(member.name)}</h1>
                {member.fav_quote && <p className="text-red-700 font-bold italic text-lg md:text-xl mb-6 break-words">"{member.fav_quote}"</p>}
                <div className="h-2 w-32 bg-red-600 mb-8"></div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    <div><p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-1 border-b-2 border-black pb-1">MBTI Base</p><p className="text-3xl md:text-4xl font-black">{val(member.mbti)}</p></div>
                    <div><p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-1 border-b-2 border-black pb-1">Enneagram</p><p className="text-3xl md:text-4xl font-black">{val(member.enneagram?.core)}</p></div>
                    <div><p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-1 border-b-2 border-black pb-1">Tritype</p><p className="text-3xl md:text-4xl font-black">{val(member.enneagram?.tritype)}</p></div>
                    <div><p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-1 border-b-2 border-black pb-1">Psyche</p><p className="text-3xl md:text-4xl font-black">{val(member.attitudinal_psyche)}</p></div>
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl hover:bg-red-600 transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl hover:bg-red-600 transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl hover:bg-red-600 transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>
        </div>
    </section>
  );
}