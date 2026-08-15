import React from "react";

export default function Template2({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-purple-950 flex items-center justify-center p-6 md:p-10 font-chakra border-b-8 border-lime-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-6xl w-full bg-purple-900 border-4 border-lime-400 p-8 md:p-12 shadow-[0_0_50px_rgba(163,230,53,0.3)] relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
                <div className="absolute inset-0 bg-lime-400 translate-x-4 translate-y-4 rounded-xl"></div>
                <img src={imgUrl} alt={val(member.name)} className="relative z-10 w-full h-full object-cover rounded-xl border-4 border-lime-400 bg-sky-100 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
            </div>

            <div className="flex-1 text-center md:text-left text-lime-400">
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] break-words whitespace-normal leading-tight">{val(member.name)}</h1>
                {member.fav_quote && <p className="text-purple-300 font-bold italic mb-8 border-l-4 border-lime-400 pl-4 break-words text-lg">"{member.fav_quote}"</p>}
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-purple-950 border border-lime-400 p-4 shadow-[inset_0_0_15px_rgba(163,230,53,0.2)]"><p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">MBTI</p><p className="text-2xl font-bold">{val(member.mbti)}</p></div>
                    <div className="bg-purple-950 border border-lime-400 p-4 shadow-[inset_0_0_15px_rgba(163,230,53,0.2)]"><p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">ENNEA</p><p className="text-2xl font-bold">{val(member.enneagram?.core)}</p></div>
                    <div className="bg-purple-950 border border-lime-400 p-4 shadow-[inset_0_0_15px_rgba(163,230,53,0.2)]"><p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">TRI</p><p className="text-2xl font-bold">{val(member.enneagram?.tritype)}</p></div>
                    <div className="bg-purple-950 border border-lime-400 p-4 shadow-[inset_0_0_15px_rgba(163,230,53,0.2)]"><p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">PSY</p><p className="text-2xl font-bold">{val(member.attitudinal_psyche)}</p></div>
                </div>

                <div className="flex justify-center md:justify-start gap-4">
                    {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-lime-400 text-purple-950 flex items-center justify-center text-xl hover:bg-white hover:text-purple-900 transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                    {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-lime-400 text-purple-950 flex items-center justify-center text-xl hover:bg-white hover:text-purple-900 transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                    {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-lime-400 text-purple-950 flex items-center justify-center text-xl hover:bg-white hover:text-purple-900 transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                </div>
            </div>
        </div>
    </section>
  );
}