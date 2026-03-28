"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Mandatory registration for the competition tech stack [cite: 16]
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intro() {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  useGSAP(() => {
    // 1. Parallax Effect: Background text moves at a different speed [cite: 21]
    gsap.to(parallaxRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", 
        end: "bottom top",
        scrub: true,
      },
    });

    // 2. Reveal Animation: Making sure cards actually appear [cite: 23]
    gsap.fromTo(".skill-card", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Trigger earlier so you see them!
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen relative py-32 px-6 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      
      {/* Background Layer: Set to z-0 so it stays behind [cite: 21] */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 opacity-[0.05] select-none pointer-events-none font-mono text-[10vw] leading-none uppercase">
        <div className="whitespace-nowrap">Color: Red;</div>
        <div className="whitespace-nowrap ml-20">Console.log("God");</div>
        <div className="whitespace-nowrap font-bold">Margin: 0 Auto;</div>
      </div>

      <div className="z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">The "Honeymoon" Phase</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          You just centered a div on your first try. You are effectively the main character 
          of the internet. [cite: 31]
        </p>
      </div>

      {/* Foreground Layer: Interaction Cards [cite: 22] */}
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { title: "HTML5", desc: "Thinking you're a hacker for using Inspect Element.", icon: "🌐" },
          { title: "CSS3", desc: "Spent 4 hours choosing between #ff0000 and #fe0000.", icon: "🎨" },
          { title: "JS", desc: "The alert('Hello') worked. You are now a senior engineer.", icon: "⚡" }
        ].map((skill, i) => (
          <div key={i} className="skill-card group p-10 bg-zinc-900/40 border border-white/10 rounded-2xl hover:border-dev-green hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer">
            <span className="text-5xl mb-6 block group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">{skill.icon}</span>
            <h3 className="text-2xl font-bold text-dev-green mb-3 uppercase">{skill.title}</h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}