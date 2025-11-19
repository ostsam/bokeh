"use client";

import Link from "next/link";

export default function Access() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#CCFF00] selection:text-black flex flex-col">
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
           <Link href="/access" className="text-[#CCFF00] transition-colors">Access</Link>
        </div>
        <Link href="/list-space" className="border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          List Space
        </Link>
      </nav>

      <div className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-black uppercase tracking-tighter">Production Access</h1>
                <p className="text-neutral-500 text-sm">Enter your credentials to access exclusive listings.</p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-lg focus:outline-none focus:border-[#CCFF00] transition-colors" placeholder="producer@studio.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">Password</label>
                    <input type="password" className="w-full bg-transparent border-b border-white/20 py-2 text-lg focus:outline-none focus:border-[#CCFF00] transition-colors" placeholder="••••••••" />
                </div>
                <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-wide hover:bg-[#CCFF00] transition-colors">
                    Enter Portal
                </button>
            </form>
            
            <div className="text-center">
                 <Link href="#" className="text-xs text-neutral-600 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-white pb-1">Apply for membership</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
