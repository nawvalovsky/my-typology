import React from "react";

export default function Template6({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 md:p-10 font-space border-l-[16px] md:border-l-[24px] border-lime-300 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-6 break-words whitespace-normal text-left">{val(member.name)}<span className="text-lime-300">.</span></h1>
                {member.fav_quote && <p className="text-lime-300 font-bold text-lg md:text-2xl mb-8 break-words text-left italic bg-zinc-900 inline-block p-4">"{member.fav_quote}"</p>}
                
                <div className="flex flex-wrap gap-4">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-14 h-14 bg-lime-300 text-zinc-950 flex items-center justify-center text-2xl hover:bg-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-14 h-14 bg-lime-300 text-zinc-950 flex items-center justify-center text-2xl hover:bg-white transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-14 h-14 bg-lime-300 text-zinc-950 flex items-center justify-center text-2xl hover:bg-white transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-lime-300 p-4 border-8 border-white mb-2">
                    <img src={imgUrl} alt={val(member.name)} className="w-full h-48 md:h-64 object-cover border-4 border-zinc-950 bg-sky-200" />
                </div>
                <div className="bg-white text-zinc-950 p-6 flex flex-col justify-end text-left"><span className="font-bold text-zinc-500 text-xs uppercase mb-2">MBTI</span><span className="text-3xl md:text-5xl font-black">{val(member.mbti)}</span></div>
                <div className="bg-lime-300 text-zinc-950 p-6 flex flex-col justify-end text-left"><span className="font-bold text-zinc-700 text-xs uppercase mb-2">Ennea</span><span className="text-3xl md:text-5xl font-black">{val(member.enneagram?.core)}</span></div>
                <div className="bg-zinc-800 text-lime-300 p-6 flex flex-col justify-end text-left"><span className="font-bold text-zinc-400 text-xs uppercase mb-2">Tritype</span><span className="text-3xl md:text-5xl font-black">{val(member.enneagram?.tritype)}</span></div>
                <div className="bg-white text-zinc-950 p-6 flex flex-col justify-end text-left"><span className="font-bold text-zinc-500 text-xs uppercase mb-2">Psyche</span><span className="text-3xl md:text-5xl font-black">{val(member.attitudinal_psyche)}</span></div>
            </div>
        </div>
    </section>
  );
}