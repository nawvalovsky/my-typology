import React from "react";

export default function Home() {
  return (
  
    <div className="flex flex-col gap-20 md:gap-32 w-full animate-in fade-in duration-700">
      
      {/* SECTION 1: Jumbotron & Welcome */}
      <section className="flex flex-col items-center justify-center pt-10 md:pt-20 text-center">

        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MyTypology</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          The only place on the internet where reducing your entire complex human personality into a neatly organized four-letter acronym is considered a massive flex.
        </p>

        {/* 3 Images Display (Asymmetric Grid) */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto">
          <div className="transform translate-y-4 md:translate-y-8 hover:-translate-y-2 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop" 
              alt="Retro Tech" 
              className="w-full h-40 md:h-72 object-cover rounded-2xl md:rounded-[2rem] shadow-xl border-4 border-white dark:border-zinc-800"
            />
          </div>
          <div className="transform hover:-translate-y-6 transition-transform duration-500 z-10">
            <img 
              src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop" 
              alt="Neon Abstract" 
              className="w-full h-48 md:h-80 object-cover rounded-2xl md:rounded-[2rem] shadow-2xl shadow-purple-500/20 border-4 border-white dark:border-zinc-800"
            />
          </div>
          <div className="transform translate-y-4 md:translate-y-8 hover:-translate-y-2 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" 
              alt="Circuit Board" 
              className="w-full h-40 md:h-72 object-cover rounded-2xl md:rounded-[2rem] shadow-xl border-4 border-white dark:border-zinc-800"
            />
          </div>
        </div>
      </section>

{/* SECTION 3: Tutorial Google Form */}
      <section className="max-w-5xl mx-auto w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Create Your Web</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Join our cult, I mean, social, in three totally painless steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-lg transform -rotate-6">1</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Fill the Form</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Hand over your MBTI, Enneagram, handles, and favorite quotes through our secure intake form.
            </p>
            <a 
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-bold border border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
            >
              Submit Typology Here ↗
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-lg transform rotate-3">2</div>
            <h3 className="text-xl font-bold mt-4 mb-3">The Waiting Game</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
               Sit back and relax for up to 3 hours while our supreme administrator manually sanitizes, formats, and integrates your data directly into the codebase.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl font-black shadow-lg transform -rotate-3">3</div>
            <h3 className="text-xl font-bold mt-4 mb-3">Bask in Glory</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Congratulations! You are now a permanent, highly-styled node in our matrix. Go show off your shiny new profile link to people who definitely understand what a '5w4' is.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Feedback & Hate Mail */}
      <section className="max-w-3xl mx-auto w-full px-4 text-center">
        <div className="bg-zinc-100 dark:bg-zinc-900/50 border border-dashed border-zinc-300 dark:border-zinc-700 p-10 rounded-[2rem]">
          <h2 className="text-2xl font-bold mb-4">Feedback, Complaints & Hate Mail</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Think our UI is garbage? Disagree with your friend's obviously mistyped Enneagram? Feel the sudden urge to yell at a developer? Send your highly structured, emotionally detached feedback to:
          </p>
          <a 
            href="mailto:nawvalovsky@gmail.com" 
            className="inline-block text-xl font-black text-blue-600 dark:text-blue-400 hover:underline mb-4"
          >
            nawvalovsky@gmail.com
          </a>
          <p className="text-xs text-zinc-500 italic">
            *We promise to read it. Responding, however, is a completely different story.
          </p>
        </div>
      </section>

      {/* SECTION 4: End / CTA */}
      <section className="w-full">
        <div className="bg-gradient-to-br from-zinc-900 to-black dark:from-zinc-900 dark:to-zinc-950 text-white p-12 md:p-24 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Assimilation is Inevitable.</h2>
            <p className="text-zinc-400 text-lg mb-10">
              Stop pretending you don't love labels. Pick one of our 15 obnoxiously high-contrast themes and immortalize your psyche on the web.
            </p>
            <a 
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Get Analyzed Now
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING ENFJ HELP BOT */}
      

    </div>
  );

}