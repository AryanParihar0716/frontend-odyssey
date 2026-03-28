"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DeveloperSprite from "./DeveloperSprite";

export default function Debugging() {
  const [coffeeLevel, setCoffeeLevel] = useState(100);
  const container = useRef();

  // Interaction #3: Refill/Drink Logic
  const handleDrink = () => {
    setCoffeeLevel((prev) => (prev > 0 ? prev - 25 : 100));
    
    // Quick "jolt" animation when drinking
    gsap.fromTo(".sprite-container", 
      { y: 0 }, 
      { y: -10, duration: 0.1, yoyo: true, repeat: 1 }
    );
  };

  useGSAP(() => {
    // Atmospheric "flicker" animation for the 3 AM vibe
    gsap.to(".code-bg", {
      opacity: 0.03,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatDelay: Math.random() * 5,
    });
  }, { scope: container });

  return (
    <section ref={container} className="min-h-[120vh] relative bg-[#050505] py-20 overflow-hidden">
      
      {/* Moving Background Text (Parallax) */}
      <div className="code-bg absolute inset-0 font-mono text-[12vw] opacity-[0.05] leading-none pointer-events-none select-none">
        UNDEFINED IS NOT A FUNCTION <br />
        OBJECT OBJECT <br />
        STRIKE THROUGH <br />
        CONSOLE.LOG("PLEASE WORK");
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 p-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
          
          {/* Interaction: The Coffee & Sprite */}
          <div className="flex flex-col items-center gap-8">
            <div className="sprite-container">
              <DeveloperSprite pose="debugging" />
            </div>
            
            {/* Clickable Coffee Cup */}
            <div 
              onClick={handleDrink}
              className="group relative cursor-pointer active:scale-90 transition-transform"
              title="Click to Refill"
            >
              <div className="w-20 h-24 border-x-4 border-b-4 border-white relative overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-amber-900 transition-all duration-700 ease-in-out"
                  style={{ height: `${coffeeLevel}%` }}
                />
              </div>
              <div className="absolute -right-8 top-6 w-10 h-14 border-4 border-l-0 border-white rounded-r-2xl" />
              <p className="mt-4 text-[10px] font-mono text-dev-green uppercase tracking-tighter text-center">
                CAFFEINE: {coffeeLevel}%
              </p>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white/90">
              The 3:00 AM Zen
            </h2>
            <div className="space-y-4 font-mono text-gray-400 text-sm md:text-lg leading-relaxed border-l-2 border-dev-green/30 pl-6">
              <p>&gt; Scanning 4,203 lines of code...</p>
              <p>&gt; Found it. A missing semicolon in a config file.</p>
              <p>&gt; The universe makes sense again. Briefly.</p>
            </div>
            
            <div className="inline-block px-4 py-2 bg-zinc-900 text-dev-green text-xs font-bold rounded">
              FIXED: "typo in .env"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}