"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import DeveloperSprite from './DeveloperSprite';
import { playSFX } from "../../utils/audio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const titleRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial fade in of the content
    tl.fromTo(".hero-content", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // 2. Typewriter animation with Sound Integration
    tl.to(titleRef.current, {
      duration: 2,
      text: "THE LIFE OF A DEVELOPER",
      ease: "none",
      onUpdate: () => {
        // Randomly play keyboard sound as letters appear
        if (Math.random() > 0.85) {
          playSFX('/sounds/keyboard_click.mp3', 0.1); 
        }
      }
    });

    // 3. Blinking cursor animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center p-4 md:p-10 relative overflow-hidden bg-dev-bg bg-grid">
      
      {/* Container for Sprite + Terminal */}
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl z-10">
        
        {/* The Protagonist: Now with Bedhead for the "Just Woke Up" story vibe */}
        <div className="flex-shrink-0 drop-shadow-[0_0_20px_rgba(0,255,65,0.15)]">
          <DeveloperSprite pose="hero" accessory="bedhead" />
        </div>

        {/* Visual Design: Terminal Aesthetic */}
        <div className="terminal-window w-full border border-dev-green/30 rounded-xl bg-black/60 backdrop-blur-xl shadow-2xl shadow-dev-green/5 overflow-hidden">
          
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a]/80 p-4 flex gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-gray-500 ml-3 font-mono uppercase tracking-[0.2em]">odyssey_v2.0 — bash</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <p className="text-dev-green/60 mb-6 text-sm md:text-base">
              $ sudo run startup_sequence.sh
            </p>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter uppercase">
              <span ref={titleRef}></span>
              <span ref={cursorRef} className="inline-block w-3 h-8 md:w-5 md:h-14 bg-dev-green ml-2 align-middle"></span>
            </h1>

            <p className="mt-10 text-gray-500 text-sm md:text-lg max-w-xl leading-relaxed italic border-l border-white/10 pl-6">
              [Session Started] Prepare for a journey through coffee-fueled nights, 
              stubborn bugs, and the sweet relief of a successful deployment.
            </p>

            {/* Interaction Hint */}
            <div className="mt-16 flex items-center gap-6 group cursor-pointer">
              <div className="h-[1px] w-16 bg-dev-green/20 group-hover:w-24 group-hover:bg-dev-green transition-all duration-700" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-dev-green/80 animate-pulse group-hover:text-dev-green transition-colors">
                Scroll to Begin
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background visual depth using the grid utility */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-dev-green) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}