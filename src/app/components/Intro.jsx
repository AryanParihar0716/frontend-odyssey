"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DeveloperSprite from './DeveloperSprite';
import { playSFX } from "../../utils/audio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intro() {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  useGSAP(() => {
  
    gsap.to(parallaxRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", 
        end: "bottom top",
        scrub: true,
      },
    });

  
    gsap.fromTo(".skill-card", 
      { y: 100, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.15, 
        duration: 1, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen relative py-32 px-6 flex flex-col items-center justify-center overflow-hidden border-y border-white/5 bg-dev-bg">
      
     
      <div ref={parallaxRef} className="absolute inset-0 z-0 opacity-[0.07] select-none pointer-events-none font-black text-[15vw] leading-none uppercase tracking-tighter text-dev-green">
        <div className="whitespace-nowrap">DISPLAY: FLEX;</div>
        <div className="whitespace-nowrap ml-40">MARGIN: 0 AUTO;</div>
        <div className="whitespace-nowrap opacity-40">CONSOLE.LOG("GOD");</div>
      </div>

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dev-green/10 rounded-full blur-[120px] pointer-events-none z-0" />

      
      <div className="z-10 text-center mb-24">
        <div className="flex justify-center mb-8 drop-shadow-[0_0_25px_rgba(0,255,65,0.2)] scale-110">
         
          <DeveloperSprite pose="idle" accessory="glasses" />
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
          The <span className="text-dev-green">Honeymoon</span> Phase
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-mono">
          [LOG] You just centered a div on your first try. 
          You are effectively the main character of the internet.
        </p>
      </div>

      
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {[
          { title: "HTML5", desc: "Thinking you're a high-level hacker because you used Inspect Element.", icon: "🌐" },
          { title: "CSS3", desc: "Spent 4 hours choosing between #ff0000 and #fe0000. It mattered.", icon: "🎨" },
          { title: "JS", desc: "The alert('Hello') worked. You are now officially a Senior Engineer.", icon: "⚡" }
        ].map((skill, i) => (
          <div 
            key={i} 
            onMouseEnter={() => playSFX('/sounds/keyboard_click.mp3', 0.05)}
            className="skill-card group p-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-dev-green/50 hover:bg-white/[0.07] transition-all duration-500 cursor-none"
          >
            <div className="text-6xl mb-8 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
              {skill.icon}
            </div>
            <h3 className="text-3xl font-black text-dev-green mb-4 uppercase tracking-tight">
              {skill.title}
            </h3>
            <p className="text-gray-400 text-lg group-hover:text-white transition-colors leading-relaxed">
              {skill.desc}
            </p>
            
            {}
            <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-dev-green transition-all duration-700 opacity-30" />
          </div>
        ))}
      </div>
    </section>
  );
}