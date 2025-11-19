"use client";

import Link from "next/link";

export default function ListSpace() {
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
           <Link href="/journal" className="hover:text-[#CCFF00] transition-colors">Journal</Link>
           <Link href="/access" className="hover:text-[#CCFF00] transition-colors">Access</Link>
        </div>
        <Link href="/list-space" className="border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest bg-white text-black hover:bg-[#CCFF00] transition-all duration-300">
          List Space
        </Link>
      </nav>

      <div className="pt-32 px-6 md:px-12 max-w-3xl mx-auto pb-20">
        <div className="space-y-4 mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Monetize your <br/><span className="text-[#CCFF00]">Aesthetic.</span></h1>
            <p className="text-xl text-neutral-400">Join our curated network of hosts. We look for unique textures, light, and character.</p>
        </div>

        <form className="space-y-12">
             <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase border-b border-white/10 pb-4">01. The Basics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Space Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-lg focus:outline-none focus:border-[#CCFF00] rounded-sm" placeholder="e.g. The Glass Loft" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Location</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-lg focus:outline-none focus:border-[#CCFF00] rounded-sm" placeholder="Neighborhood, Borough" />
                    </div>
                </div>
             </div>

             <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase border-b border-white/10 pb-4">02. The Details</h3>
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Description</label>
                    <textarea className="w-full bg-white/5 border border-white/10 p-4 text-lg focus:outline-none focus:border-[#CCFF00] rounded-sm h-32" placeholder="Tell us about the light, the noise levels, and the unique features..." />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Hourly Rate ($)</label>
                        <input type="number" className="w-full bg-white/5 border border-white/10 p-4 text-lg focus:outline-none focus:border-[#CCFF00] rounded-sm" placeholder="200" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-neutral-500">Square Footage</label>
                        <input type="number" className="w-full bg-white/5 border border-white/10 p-4 text-lg focus:outline-none focus:border-[#CCFF00] rounded-sm" placeholder="1500" />
                    </div>
                </div>
             </div>

            <button className="w-full py-6 bg-[#CCFF00] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors text-lg">
                Submit Application
            </button>
        </form>
      </div>
    </div>
  );
}
