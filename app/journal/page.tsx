"use client";

import Link from "next/link";

const ARTICLES = [
    {
        id: 1,
        title: "Light Study: The Golden Hour in Dumbo",
        date: "Oct 12, 2025",
        category: "Technique"
    },
    {
        id: 2,
        title: "Interview: Shooting 'The Void' with Director Sarah Jenkins",
        date: "Oct 08, 2025",
        category: "Featured"
    },
    {
        id: 3,
        title: "Hidden Gems: 5 Underground Spaces in Brooklyn",
        date: "Sep 28, 2025",
        category: "Locations"
    },
    {
        id: 4,
        title: "The Return of Brutalism in Set Design",
        date: "Sep 15, 2025",
        category: "Trend"
    }
]

export default function Journal() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#CCFF00] selection:text-black">
       {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-difference text-white">
        <div className="flex flex-col leading-none uppercase tracking-tighter text-sm font-mono">
          <Link href="/">BOKEH</Link>
          <span className="opacity-50">Est. 2025</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-medium tracking-widest uppercase">
           <Link href="/" className="hover:text-[#CCFF00] transition-colors">Locations</Link>
           <Link href="/scouting" className="hover:text-[#CCFF00] transition-colors">Scouting</Link>
           <Link href="/journal" className="text-[#CCFF00] transition-colors">Journal</Link>
           <Link href="/access" className="hover:text-[#CCFF00] transition-colors">Access</Link>
        </div>
        <Link href="/list-space" className="border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          List Space
        </Link>
      </nav>

      <section className="pt-40 px-6 md:px-12 max-w-[1800px] mx-auto">
        <h1 className="text-[10vw] leading-none font-black tracking-tighter uppercase mb-24 text-[#CCFF00]">
            The Journal
        </h1>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
            {ARTICLES.map((article) => (
                <div key={article.id} className="bg-[#050505] p-12 hover:bg-white/5 transition-colors group cursor-pointer flex flex-col md:flex-row justify-between items-baseline gap-4">
                    <div className="space-y-2">
                        <span className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest">{article.category}</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all">{article.title}</h2>
                    </div>
                    <span className="font-mono text-xs text-neutral-500">{article.date}</span>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
