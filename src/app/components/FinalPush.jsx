"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DeveloperSprite from "./DeveloperSprite";
import { playSFX } from "../../utils/audio";

export default function FinalPush() {
  const titleRef = useRef(null);
  const container = useRef();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useGSAP(() => {
    if (!hasMounted) return;
    playSFX('/sounds/success-chime.mp3', 0.4);

    gsap.from(titleRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  }, { scope: container, dependencies: [hasMounted] });

  return (
    <section 
      ref={container} 
      className="h-screen w-full bg-dev-green text-black flex flex-col items-center justify-center relative overflow-hidden z-50"
    >
      
      <div className="absolute top-12 w-full overflow-hidden whitespace-nowrap opacity-20 font-black text-xl md:text-2xl uppercase tracking-[1em] select-none pointer-events-none">
        SUCCESS... DEPLOYING... SUCCESS... DEPLOYING... SUCCESS...
      </div>

      <div className="z-10 flex flex-col items-center gap-4 md:gap-8">
     
        <div className="celebration-sprite animate-bounce pt-10">
          <DeveloperSprite pose="success" accessory="party" />
        </div>
        
        
        <div ref={titleRef} className="text-center">
          <h2 className="text-[18vw] md:text-[14rem] font-black leading-[0.8] tracking-tighter uppercase drop-shadow-2xl">
            SHIP IT!
          </h2>
          <div className="mt-6 inline-block bg-black text-dev-green px-6 py-2 md:px-10 md:py-3 text-xl md:text-3xl font-black uppercase transform -rotate-2 shadow-2xl">
            Build Successful
          </div>
        </div>

      
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 font-mono font-bold uppercase tracking-widest text-xs border-b-2 border-black hover:pb-2 transition-all cursor-pointer"
        >
          &gt; REBOOT_JOURNEY
        </button>
      </div>

     
      {hasMounted && (
        <div className="absolute inset-0 pointer-events-none opacity-50 z-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute text-4xl md:text-6xl animate-pulse"
              style={{ 
                top: `${Math.random() * 80 + 10}%`, 
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              🚀
            </div>
          ))}
        </div>
      )}
    </section>
  );
}