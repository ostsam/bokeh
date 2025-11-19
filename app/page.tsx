"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// --- DATA ---
const LOCATIONS = [
  {
    id: "01",
    name: "The Concrete Cathedral",
    area: "Bushwick",
    type: "Industrial Warehouse",
    price: "$250/hr",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop",
    coords: "40.7061° N, 73.9249° W",
  },
  {
    id: "02",
    name: "Skyline Glass Box",
    area: "SoHo",
    type: "Penthouse Terrace",
    price: "$500/hr",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    coords: "40.7233° N, 74.0030° W",
  },
  {
    id: "03",
    name: "Midnight Diner",
    area: "LES",
    type: "Retro Bar",
    price: "$200/hr",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
    coords: "40.7150° N, 73.9843° W",
  },
  {
    id: "04",
    name: "The White Void",
    area: "Chelsea",
    type: "Cyclorama Studio",
    price: "$175/hr",
    img: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=2000&auto=format&fit=crop",
    coords: "40.7465° N, 74.0014° W",
  },
];

export default function Home() {
  const [activeLoc, setActiveLoc] = useState(0);
  const [mounted, setMounted] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
    
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLoc(index);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#EAEAEA] font-sans selection:bg-[#CCFF00] selection:text-black overflow-hidden">
      {/* Cinematic Entrance Curtain */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center transition-transform duration-[1.5s] cubic-bezier(0.76, 0, 0.24, 1) ${mounted ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="overflow-hidden">
            <h1 className={`text-6xl md:text-8xl font-black uppercase tracking-tighter text-white transition-transform duration-1000 delay-300 ${mounted ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              SET.NYC
            </h1>
        </div>
      </div>

      {/* Noise Overlay for Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-difference text-white opacity-0 ${mounted ? 'animate-fade-in delay-1000' : ''}`}>
        <div className="flex flex-col leading-none uppercase tracking-tighter text-sm font-mono">
          <span>SET.NYC</span>
          <span className="opacity-50">Est. 2025</span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-medium tracking-widest uppercase">
            <Link href="/" className="hover:text-[#CCFF00] transition-colors">
              Locations
            </Link>
            <Link href="/scouting" className="hover:text-[#CCFF00] transition-colors">
              Scouting
            </Link>
            <Link href="/journal" className="hover:text-[#CCFF00] transition-colors">
              Journal
            </Link>
            <Link href="/access" className="hover:text-[#CCFF00] transition-colors">
              Access
            </Link>
        </div>
        <Link href="/list-space" className="border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          List Space
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2500&auto=format&fit=crop"
            alt="NYC Background"
            fill
            className={`object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s] ease-out scale-105 ${mounted ? 'animate-scale-reveal' : 'opacity-0'}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[90vw] text-center overflow-hidden">
          <h1 className={`text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-screen opacity-0 ${mounted ? 'animate-reveal-up delay-500' : ''}`}>
            Cinema <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
              Verité
            </span>
          </h1>
        </div>

        <div className={`absolute bottom-12 left-6 right-6 flex justify-between items-end text-xs font-mono uppercase tracking-widest text-white/60 opacity-0 ${mounted ? 'animate-fade-in delay-1000' : ''}`}>
          <div className="max-w-xs">
            <p>Curated film locations</p>
            <p>New York City, NY</p>
          </div>
          <div className="animate-bounce">
            ( Scroll )
          </div>
          <div className="max-w-xs text-right hidden sm:block">
            <p>Availability: Instant</p>
            <p>Permits: Verified</p>
          </div>
        </div>
      </header>

      {/* Marquee Separator */}
      <div className="w-full bg-[#CCFF00] text-black overflow-hidden py-3">
        <div className="whitespace-nowrap animate-marquee flex gap-8 text-lg font-bold uppercase tracking-tight">
          {[...Array(10)].map((_, i) => (
            <span key={i}>Production Ready • Verified Hosts • Sound Stage • Rooftops • Lofts • Warehouses • </span>
          ))}
        </div>
      </div>

      {/* Interactive List Section */}
      <section className="py-32 px-4 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Image Preview */}
          <div className="hidden lg:block lg:col-span-5 relative h-[600px]">
            <div className="sticky top-32 w-full h-full rounded-lg overflow-hidden border border-white/10">
              {LOCATIONS.map((loc, idx) => (
                <Image
                  key={loc.id}
                  src={loc.img}
                  alt={loc.name}
                  fill
                  className={`object-cover transition-opacity duration-700 ${
                    activeLoc === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-mono uppercase border border-white/10">
                {LOCATIONS[activeLoc].coords}
              </div>
            </div>
          </div>

          {/* List Items */}
          <div className="lg:col-span-7 space-y-8">
            <div className="mb-16 border-b border-white/10 pb-4 flex justify-between items-end">
              <h2 className="text-4xl font-light uppercase tracking-tighter">The Collection</h2>
              <span className="font-mono text-xs text-[#CCFF00]">(0{LOCATIONS.length})</span>
            </div>

            <div className="flex flex-col">
              {LOCATIONS.map((loc, idx) => (
                <div
                  key={loc.id}
                  ref={(el) => { itemRefs.current[idx] = el; }}
                  onMouseEnter={() => setActiveLoc(idx)}
                  className="group relative py-8 border-t border-white/10 hover:border-white/40 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-neutral-500">/{loc.id}</span>
                      <h3 className="text-3xl md:text-5xl font-medium uppercase tracking-tight group-hover:pl-4 transition-all duration-300">
                        {loc.name}
                      </h3>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-2 text-right">
                       <span className="px-3 py-1 rounded-full border border-white/20 text-xs uppercase hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors">
                        {loc.area}
                      </span>
                      <span className="font-mono text-sm text-neutral-400">{loc.price}</span>
                    </div>
                  </div>
                  <p className="mt-4 md:ml-16 text-neutral-500 text-sm max-w-md group-hover:text-white transition-colors">
                    {loc.type} — Perfect for music videos, interviews, and fashion editorials.
                  </p>
                </div>
              ))}
            </div>
             <div className="border-t border-white/10 pt-8 flex justify-center">
                <button className="text-sm font-mono uppercase tracking-widest border-b border-transparent hover:border-[#CCFF00] hover:text-[#CCFF00] pb-1 transition-all">
                    View Full Catalog
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Brutalist Grid */}
      <section className="border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { title: "Scout", desc: "Browse through high-res captures. 3D walkthroughs available for select premium tiers." },
            { title: "Book", desc: "Direct to host. No agents. Hourly rates locked in. Insurance verified automatically." },
            { title: "Shoot", desc: "Wi-Fi 6. 200 Amp power. Load-in access. On-site grips available upon request." }
          ].map((item, i) => (
            <div key={i} className="p-12 hover:bg-white/5 transition-colors duration-500">
              <h4 className="font-mono text-xs text-[#CCFF00] mb-4">STEP 0{i + 1}</h4>
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-2">
            <h2 className="text-[5vw] leading-none font-black tracking-tighter uppercase">
              Bokeh
            </h2>
            <p className="text-neutral-500 max-w-sm">
              The city is your set. We just hold the keys.
            </p>
          </div>

          <div className="flex gap-12 text-sm font-mono uppercase text-neutral-400">
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Email</a></li>
            </ul>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
