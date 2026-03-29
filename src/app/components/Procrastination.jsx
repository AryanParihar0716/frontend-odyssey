"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DeveloperSprite from "./DeveloperSprite";
import { playSFX } from "../../utils/audio";

export default function Procrastination() {
  const [isGaming, setIsGaming] = useState(true);
  const container = useRef();

  const handleToggle = () => {
    setIsGaming(!isGaming);
   
    playSFX(isGaming ? '/sounds/glitch-whoosh.mp3' : '/sounds/keyboard_click.mp3', 0.4);
  };

  useGSAP(() => {
    
    if (!isGaming) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(".glitch-text", { x: 3, y: 1, duration: 0.05, skewX: 2 })
        .to(".glitch-text", { x: -3, y: -1, duration: 0.05, skewX: -2 })
        .to(".glitch-text", { x: 0, y: 0, duration: 0.05, skewX: 0 });

      
      gsap.to(container.current, {
        backgroundColor: "#1a0000",
        duration: 0.08,
        repeat: 5,
        yoyo: true,
      });
    } else {
      gsap.to(container.current, { 
        backgroundColor: "#000000", 
        duration: 0.8,
        ease: "power2.inOut" 
      });
      gsap.set(".glitch-text", { x: 0, y: 0, skewX: 0 });
    }
  }, [isGaming]);

  return (
    <section 
      ref={container} 
      className="h-screen relative flex flex-col items-center justify-center transition-all duration-1000 overflow-hidden"
    >
      
    
      <div 
        className={`absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-1000 bg-[size:40px_40px] ${
          isGaming 
            ? 'bg-[radial-gradient(var(--color-game-neon)_1px,transparent_1px)]' 
            : 'bg-[radial-gradient(var(--color-panic-red)_1px,transparent_1px)]'
        }`} 
      />

     
      <div className="mb-12 relative z-20">
        <div className={`transition-all duration-500 ${
          isGaming 
            ? 'drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]' 
            : 'drop-shadow-[0_0_20px_rgba(255,49,49,0.4)]'
        }`}>
          
          <DeveloperSprite 
            pose={isGaming ? "gaming" : "debugging"} 
            accessory={isGaming ? "headset" : "tire"} 
          />
        </div>
        
        {!isGaming && (
          <div className="absolute -top-6 -right-10 bg-panic-red text-white text-xs px-3 py-1 font-black animate-bounce rotate-12 shadow-xl border-2 border-white">
            ! DEADLINE CRITICAL
          </div>
        )}
      </div>

      <div className="z-10 text-center px-4">
        <h2 className={`glitch-text text-6xl md:text-[9rem] font-black uppercase mb-6 leading-none tracking-tighter transition-all ${
          isGaming ? 'text-game-neon' : 'text-panic-red italic'
        }`}>
          {isGaming ? "One More Match" : "System Overload"}
        </h2>
        
        <p className="text-gray-500 mb-12 max-w-lg mx-auto font-mono text-sm md:text-lg uppercase tracking-widest transition-colors duration-500">
          {isGaming 
            ? "The code can wait. The leaderboard cannot. Rank #1 is calling."
            : "FATAL ERROR: 472 unsaved changes. Deployment starts in T-minus 10 minutes."}
        </p>
        
        
        <button 
          onClick={handleToggle}
          className="group relative px-14 py-5 border-2 border-white overflow-hidden active:scale-90 transition-transform cursor-none"
        >
          <span className="relative z-10 font-black uppercase tracking-[0.3em] text-xs md:text-sm group-hover:text-black transition-colors duration-300">
            {isGaming ? "Alt + Tab to Code" : "Escape the Panic"}
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
        </button>
      </div>

      
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none flex flex-wrap gap-16 p-20 items-center justify-center">
        {Array(24).fill(0).map((_, i) => (
          <span 
            key={i} 
            className={`text-5xl transition-all duration-1000 ${
              isGaming ? 'rotate-0 scale-100' : 'rotate-180 scale-125'
            }`}
          >
            {isGaming ? "🎮" : "⚠️"}
          </span>
        ))}
      </div>
    </section>
  );
}