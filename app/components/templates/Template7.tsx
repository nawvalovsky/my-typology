import React from "react";

export default function Template7({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-teal-950 flex items-center justify-center p-6 font-syne relative overflow-hidden border-t-8 border-orange-500">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-5xl w-full bg-teal-900/50 backdrop-blur-xl border border-teal-700 p-8 md:p-14 rounded-[2rem] shadow-2xl relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-4 border-orange-500 p-2 shadow-[0_0_30px_rgba(249,115,22,0.4)] bg-teal-950">
                <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover rounded-full border-2 border-teal-700" />
            </div>

            <div className="flex-1 w-full text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight break-words whitespace-normal leading-tight">{val(member.name)}</h1>
                {member.fav_quote && <p className="text-orange-400 font-bold italic mb-8 break-words text-lg">"{member.fav_quote}"</p>}
                
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 text-left">
                    <div className="border-l-4 border-orange-500 pl-4 bg-teal-900/40 p-4 rounded-r-xl"><p className="text-teal-400 text-xs font-bold uppercase mb-1">MBTI</p><p className="text-2xl md:text-3xl font-black text-white">{val(member.mbti)}</p></div>
                    <div className="border-l-4 border-orange-500 pl-4 bg-teal-900/40 p-4 rounded-r-xl"><p className="text-teal-400 text-xs font-bold uppercase mb-1">Ennea</p><p className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.core)}</p></div>
                    <div className="border-l-4 border-orange-500 pl-4 bg-teal-900/40 p-4 rounded-r-xl"><p className="text-teal-400 text-xs font-bold uppercase mb-1">Tritype</p><p className="text-2xl md:text-3xl font-black text-white">{val(member.enneagram?.tritype)}</p></div>
                    <div className="border-l-4 border-orange-500 pl-4 bg-teal-900/40 p-4 rounded-r-xl"><p className="text-teal-400 text-xs font-bold uppercase mb-1">Psyche</p><p className="text-2xl md:text-3xl font-black text-white">{val(member.attitudinal_psyche)}</p></div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 flex items-center justify-center border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-teal-950 transition-colors text-xl"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 flex items-center justify-center border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-teal-950 transition-colors text-xl"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 flex items-center justify-center border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-teal-950 transition-colors text-xl"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>
        </div>
    </section>
  );
}