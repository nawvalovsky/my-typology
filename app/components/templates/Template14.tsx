import React from "react";

export default function Template14({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-400 via-white to-green-300 flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full bg-white/50 backdrop-blur-2xl border border-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-sky-400 to-green-400 p-2 rounded-full shadow-2xl shrink-0">
            <img src={imgUrl} alt={val(member.name)} className="w-full h-full object-cover rounded-full border-4 border-white" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-sky-900 tracking-tight mb-4 drop-shadow-sm break-words whitespace-normal leading-tight">{val(member.name)}</h1>
            {member.fav_quote && <p className="text-sky-800 font-semibold italic text-lg mb-8 bg-white/40 inline-block px-4 py-2 rounded-2xl break-words">"{member.fav_quote}"</p>}
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
              <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white"><p className="text-sky-600 text-xs uppercase font-bold mb-1">MBTI</p><p className="text-2xl md:text-3xl font-black text-sky-950">{val(member.mbti)}</p></div>
              <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white"><p className="text-sky-600 text-xs uppercase font-bold mb-1">Ennea</p><p className="text-2xl md:text-3xl font-black text-sky-950">{val(member.enneagram?.core)}</p></div>
              <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white"><p className="text-sky-600 text-xs uppercase font-bold mb-1">Tritype</p><p className="text-2xl md:text-3xl font-black text-sky-950">{val(member.enneagram?.tritype)}</p></div>
              <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white"><p className="text-sky-600 text-xs uppercase font-bold mb-1">Psyche</p><p className="text-2xl md:text-3xl font-black text-sky-950">{val(member.attitudinal_psyche)}</p></div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-white text-sky-600 flex items-center justify-center rounded-full text-xl hover:bg-sky-600 hover:text-white transition-colors shadow-md"><i className="fa-brands fa-facebook-f"></i></a>}
                {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-white text-sky-600 flex items-center justify-center rounded-full text-xl hover:bg-sky-600 hover:text-white transition-colors shadow-md"><i className="fa-brands fa-instagram"></i></a>}
                {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-white text-sky-600 flex items-center justify-center rounded-full text-xl hover:bg-sky-600 hover:text-white transition-colors shadow-md"><i className="fa-brands fa-tiktok"></i></a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}