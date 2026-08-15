import React from "react";

export default function Template4({ member }: { member: any }) {
  const val = (v: string | null | undefined) => v || "-";
  const imgUrl = member.photo && member.photo !== "none" ? member.photo : "https://i.ibb.co.com/DmtVhzv/AK74.png";

  return (
    <section className="min-h-screen bg-orange-500 p-6 flex flex-col items-center justify-center font-space relative overflow-hidden">
        <div className="max-w-6xl w-full bg-zinc-900 border-8 border-black p-4 relative z-10 shadow-[10px_10px_0_0_#000] md:shadow-[20px_20px_0_0_#000]">
            <div className="border-4 border-dashed border-zinc-700 p-6 md:p-12 flex flex-col md:flex-row gap-10">
                <div className="flex-1 order-2 md:order-1 text-white flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 break-words whitespace-normal leading-tight text-white">{val(member.name)}</h1>
                    {member.fav_quote && <p className="text-orange-500 font-bold italic mb-10 text-lg md:text-xl border-l-4 border-white pl-4 break-words">"{member.fav_quote}"</p>}
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-zinc-800 border-2 border-black p-4"><div className="text-zinc-400 font-bold uppercase text-xs mb-2">Base</div><div className="text-3xl font-black text-white">{val(member.mbti)}</div></div>
                        <div className="bg-zinc-800 border-2 border-black p-4"><div className="text-zinc-400 font-bold uppercase text-xs mb-2">Core</div><div className="text-3xl font-black text-white">{val(member.enneagram?.core)}</div></div>
                        <div className="bg-zinc-800 border-2 border-black p-4"><div className="text-zinc-400 font-bold uppercase text-xs mb-2">Trifix</div><div className="text-3xl font-black text-white">{val(member.enneagram?.tritype)}</div></div>
                        <div className="bg-zinc-800 border-2 border-black p-4"><div className="text-zinc-400 font-bold uppercase text-xs mb-2">Psyche</div><div className="text-3xl font-black text-white">{val(member.attitudinal_psyche)}</div></div>
                    </div>
                </div>

                <div className="w-full md:w-2/5 order-1 md:order-2 shrink-0">
                    <div className="bg-orange-500 p-4 border-4 border-black h-full flex flex-col items-center justify-center">
                        <img src={imgUrl} alt={val(member.name)} className="w-full h-auto object-cover border-4 border-black bg-sky-100 shadow-[8px_8px_0_0_#18181b] mb-8" />
                        <div className="flex flex-wrap gap-4 w-full justify-center">
                            {member.socials?.facebook && <a href={member.socials.facebook} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl border-2 border-black hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-facebook-f"></i></a>}
                            {member.socials?.instagram && <a href={member.socials.instagram} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl border-2 border-black hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-instagram"></i></a>}
                            {member.socials?.tiktok && <a href={member.socials.tiktok} className="w-12 h-12 bg-black text-white flex items-center justify-center text-xl border-2 border-black hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-tiktok"></i></a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}