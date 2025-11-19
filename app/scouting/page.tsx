"use client";

import Link from "next/link";

export default function Scouting() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-difference text-white">
        <div className="flex flex-col leading-none uppercase tracking-tighter text-sm font-mono">
          <Link href="/">BOKEH</Link>
          <span className="opacity-50">Est. 2025</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-medium tracking-widest uppercase">
           {/* "Locations" is just Home for now, but ideally it's a separate page too. I'll point it to home. */}
           <Link href="/" className="hover:text-[#CCFF00] transition-colors">Locations</Link>
           <Link href="/scouting" className="text-[#CCFF00] transition-colors">Scouting</Link>
           <Link href="/journal" className="hover:text-[#CCFF00] transition-colors">Journal</Link>
           <Link href="/access" className="hover:text-[#CCFF00] transition-colors">Access</Link>
        </div>
        <Link href="/list-space" className="border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          List Space
        </Link>
      </nav>

      <section className="pt-32 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                We find the <br/><span className="text-[#CCFF00]">Impossible</span> shot.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
                Our scouting team specializes in hard-to-access NYC locations. Subways, abandoned stations, private rooftops, and historical landmarks.
            </p>
            
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase">Bespoke Scouting</h3>
                    <p className="text-sm text-neutral-500">Tell us your vision. We provide a curated list of location options within 48 hours, complete with lighting reports and permit requirements.</p>
                    <button className="text-[#CCFF00] uppercase text-xs tracking-widest border-b border-[#CCFF00] pb-1">Start Request</button>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase">Permit Management</h3>
                    <p className="text-sm text-neutral-500">Navigating NYC film permits is a nightmare. We handle the paperwork, insurance certificates, and police unit coordination.</p>
                    <button className="text-[#CCFF00] uppercase text-xs tracking-widest border-b border-[#CCFF00] pb-1">Learn More</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
