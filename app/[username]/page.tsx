import membersData from "../data/members.json";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";
import Template4 from "../components/templates/Template4";
import Template5 from "../components/templates/Template5";
import Template6 from "../components/templates/Template6";
import Template7 from "../components/templates/Template7";
import Template8 from "../components/templates/Template8";
import Template9 from "../components/templates/Template9";
import Template10 from "../components/templates/Template10";
import Template11 from "../components/templates/Template11";
import Template12 from "../components/templates/Template12";
import Template13 from "../components/templates/Template13";
import Template14 from "../components/templates/Template14";
import Template15 from "../components/templates/Template15";
import { notFound } from "next/navigation";
import Link from "next/link";

const templates: Record<number, React.ElementType> = {
  1: Template1, 2: Template2, 3: Template3, 4: Template4, 5: Template5,
  6: Template6, 7: Template7, 8: Template8, 9: Template9, 10: Template10,
  11: Template11, 12: Template12, 13: Template13, 14: Template14, 15: Template15,
};

export function generateStaticParams() {
  return membersData.map((member) => ({ username: member.slug }));
}

export default async function MemberProfile(props: { params: Promise<{ username: string }> }) {
  const params = await props.params;
  const member = membersData.find((m) => m.slug === params.username);
  
  if (!member) notFound();
  
  const SelectedTemplate = templates[member.template] || Template1;
  
  return (
    <main className="w-full relative min-h-screen">
      {/* 
        Mini Header / Floating Back Button 
        Dibuat melayang (fixed) agar desain template tetap terasa full-screen layaknya landing page mandiri.
      */}
      <Link 
        href="/" 
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 bg-black/20 hover:bg-black/60 dark:bg-white/10 dark:hover:bg-white/30 text-white backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all border border-white/20 shadow-lg flex items-center gap-2"
      >
        <span>←</span> <span>Hub</span>
      </Link>

      {/* Render Template Pilihan */}
      <SelectedTemplate member={member} />
    </main>
  );
}