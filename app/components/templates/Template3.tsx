import React from "react";

export default function Template3({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen flex flex-col md:flex-row font-bebas text-6xl tracking-wider">
        <div className="w-full md:w-1/2 bg-yellow-400 p-10 md:p-20 flex flex-col justify-center items-center border-b-8 md:border-b-0 md:border-r-8 border-black text-black relative bg-polka-black">
            <div className="bg-white p-4 border-8 border-black shadow-[16px_16px_0_0_#1e3a8a] transform -rotate-3 relative z-10 shrink-0">
                <img src={imgUrl} alt={val(member.name)} className="w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-black" />
            </div>
            <h1 className="text-5xl md:text-[5rem] mt-10 bg-black text-yellow-400 px-6 py-4 transform rotate-2 text-center break-words whitespace-normal leading-none max-w-[90%]">{val(member.name)}</h1>
        </div>
        
        <div className="w-full md:w-1/2 bg-blue-900 p-10 md:p-20 flex flex-col justify-center text-yellow-400">
            {member.fav_quote && <p className="font-space text-white text-xl italic mb-10 border-l-4 border-yellow-400 pl-4 tracking-normal break-words">"{member.fav_quote}"</p>}
            <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
                <div className="flex justify-between items-end border-b-8 border-yellow-400 pb-2"><span className="text-3xl text-white">MBTI</span><span className="text-5xl md:text-6xl text-yellow-400">{val(member.mbti)}</span></div>
                <div className="flex justify-between items-end border-b-8 border-yellow-400 pb-2"><span className="text-3xl text-white">ENNEA</span><span className="text-5xl md:text-6xl text-yellow-400">{val(member.enneagram?.core)}</span></div>
                <div className="flex justify-between items-end border-b-8 border-yellow-400 pb-2"><span className="text-3xl text-white">TRITYPE</span><span className="text-5xl md:text-6xl text-yellow-400">{val(member.enneagram?.tritype)}</span></div>
                <div className="flex justify-between items-end border-b-8 border-yellow-400 pb-2"><span className="text-3xl text-white">PSYCHE</span><span className="text-5xl md:text-6xl text-yellow-400">{val(member.attitudinal_psyche)}</span></div>
            </div>
            <div className="flex gap-4 mt-10 font-sans">
                {member.socials?.facebook && <a href={member.socials.facebook} className="w-14 h-14 bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                {member.socials?.instagram && <a href={member.socials.instagram} className="w-14 h-14 bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-white transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-14 h-14 bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
            </div>
        </div>
    </section>
  );
}