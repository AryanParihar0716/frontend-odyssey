"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DeveloperSprite from "./DeveloperSprite";

export default function Procrastination() {
  const [isGaming, setIsGaming] = useState(true);
  const container = useRef();

  useGSAP(() => {
    // Distinct Animation: The "Panic Glitch"
    if (!isGaming) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(".glitch-text", { x: 2, y: 1, duration: 0.05 })
        .to(".glitch-text", { x: -2, y: -1, duration: 0.05 })
        .to(".glitch-text", { x: 0, y: 0, duration: 0.05 });

      // Dramatic background flash
      gsap.to(container.current, {
        backgroundColor: "#1a0000",
        duration: 0.1,
        repeat: 3,
        yoyo: true,
      });
    } else {
      gsap.to(container.current, { backgroundColor: "#000000", duration: 0.5 });
      gsap.set(".glitch-text", { x: 0, y: 0 });
    }
  }, [isGaming]);

  return (
    <section ref={container} className="h-screen relative flex flex-col items-center justify-center transition-colors duration-700 overflow-hidden">
      
      {/* Narrative Sprite */}
      <div className="mb-8 relative">
        <DeveloperSprite pose={isGaming ? "gaming" : "debugging"} />
        {!isGaming && (
          <div className="absolute -top-4 -right-4 bg-panic-red text-white text-[10px] px-2 py-1 font-bold animate-bounce">
            ! ERROR
          </div>
        )}
      </div>

      <div className="z-10 text-center">
        <h2 className={`glitch-text text-5xl md:text-8xl font-black uppercase mb-6 transition-all ${isGaming ? 'text-game-neon' : 'text-panic-red'}`}>
          {isGaming ? "One More Match..." : "CRITICAL DEADLINE"}
        </h2>
        
        <p className="text-gray-400 mb-10 max-w-md mx-auto font-mono text-sm">
          {isGaming 
            ? "The code can wait. The leaderboard cannot. Rank #1 is calling."
            : "SYSTEM FAILURE: 472 unsaved changes. Deployment in T-minus 10 minutes."}
        </p>
        
        {/* Interaction Element: The "Panic" Toggle */}
        <button 
          onClick={() => setIsGaming(!isGaming)}
          className="group relative px-10 py-4 border-2 border-white overflow-hidden transition-all active:scale-95"
        >
          <span className="relative z-10 font-bold uppercase tracking-widest group-hover:text-black transition-colors">
            {isGaming ? "ALT + TAB TO CODE" : "RESUME GAMING"}
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Background Visual: Subtle moving icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex flex-wrap gap-10 p-10">
        {Array(20).fill(isGaming ? "🎮" : "⚠️").map((icon, i) => (
          <span key={i} className="text-4xl grayscale">{icon}</span>
        ))}
      </div>
    </section>
  );
}