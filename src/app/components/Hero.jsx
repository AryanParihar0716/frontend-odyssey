"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import DeveloperSprite from './DeveloperSprite'; // Ensure the path is correct

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const titleRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial fade in of the sprite and terminal
    tl.fromTo(".hero-content", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // 2. Typewriter animation for the main title
    tl.to(titleRef.current, {
      duration: 2,
      text: "THE LIFE OF A DEVELOPER",
      ease: "none",
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
    <section className="h-screen flex flex-col items-center justify-center p-4 md:p-10 relative overflow-hidden bg-dev-bg">
      
      {/* Container for Sprite + Terminal (Responsiveness handled here) */}
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl z-10">
        
        {/* The Protagonist: Pose set to 'hero' for the awakening */}
        <div className="flex-shrink-0">
          <DeveloperSprite pose="hero" />
        </div>

        {/* Visual Design: Terminal Aesthetic */}
        <div className="terminal-window w-full border border-dev-green/30 rounded-lg bg-black/80 backdrop-blur-md shadow-2xl shadow-dev-green/10 overflow-hidden">
          
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] p-3 flex gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-gray-500 ml-2 font-mono uppercase tracking-widest">odyssey_terminal — 80x24</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-12 font-mono">
            <p className="text-dev-green mb-4 text-sm md:text-base opacity-70">
              $ sudo run startup_sequence.sh
            </p>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span ref={titleRef}></span>
              <span ref={cursorRef} className="inline-block w-3 h-6 md:w-5 md:h-12 bg-dev-green ml-2 align-middle"></span>
            </h1>

            <p className="mt-8 text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed">
              [Session Started] Prepare for a journey through coffee-fueled nights, 
              stubborn bugs, and the sweet relief of a successful deployment.
            </p>

            {/* Interaction Hint */}
            <div className="mt-12 flex items-center gap-4 group">
              <div className="h-[1px] w-12 bg-dev-green/30 group-hover:w-20 transition-all duration-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-dev-green animate-pulse">
                Scroll to Begin
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-dev-green) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
    </section>
  );
}