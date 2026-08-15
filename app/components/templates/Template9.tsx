import React from "react";

export default function Template9({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-violet-950 flex flex-col items-center justify-center p-6 font-syne border-b-8 border-green-400">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-green-400 bg-violet-900 shadow-[10px_10px_0_0_#4ade80] md:shadow-[16px_16px_0_0_#4ade80]">
            <div className="p-8 md:p-14 border-b-4 md:border-b-0 md:border-r-4 border-green-400 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-stripes-pink">
                <div className="bg-violet-950 p-6 md:p-10 border-4 border-green-400 w-full text-center shadow-[8px_8px_0_0_#4ade80]">
                    <h1 className="text-4xl md:text-6xl font-black text-green-400 uppercase tracking-tight mb-6 break-words whitespace-normal leading-tight text-white drop-shadow-[2px_2px_0_#000]">{val(member.name)}</h1>
                    {member.fav_quote && <p className="text-pink-400 font-bold italic text-lg mb-8 break-words">"{member.fav_quote}"</p>}
                    
                    <div className="flex flex-wrap gap-4 justify-center">
                        {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-green-400 text-violet-950 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"><i className="fa-brands fa-facebook-f"></i></a>}
                        {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-green-400 text-violet-950 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"><i className="fa-brands fa-instagram"></i></a>}
                        {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform"><i className="fa-brands fa-tiktok"></i></a>}
                    </div>
                </div>
            </div>
            
            <div className="p-8 md:p-14 flex flex-col justify-center bg-violet-900">
                <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-10 border-4 border-pink-500 shadow-[8px_8px_0_0_#4ade80] bg-green-400 p-2 shrink-0">
                    <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-left">
                    <div className="border-b-4 border-pink-500 pb-2"><p className="text-green-400 font-bold uppercase text-xs mb-1">MBTI</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.mbti)}</p></div>
                    <div className="border-b-4 border-pink-500 pb-2"><p className="text-green-400 font-bold uppercase text-xs mb-1">Ennea</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.enneagram?.core)}</p></div>
                    <div className="border-b-4 border-pink-500 pb-2"><p className="text-green-400 font-bold uppercase text-xs mb-1">Tritype</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.enneagram?.tritype)}</p></div>
                    <div className="border-b-4 border-pink-500 pb-2"><p className="text-green-400 font-bold uppercase text-xs mb-1">Psyche</p><p className="text-3xl md:text-4xl font-black text-white">{val(member.attitudinal_psyche)}</p></div>
                </div>
            </div>
        </div>
    </section>
  );
}