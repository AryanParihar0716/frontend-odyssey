"use client";
import { useEffect, useRef, useState } from "react"; // Added useState
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DeveloperSprite from "./DeveloperSprite";

export default function FinalPush() {
  const titleRef = useRef(null);
  const container = useRef();
  
  // STEP 1: Track if the component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Set to true once we are on the client
  }, []);

  useGSAP(() => {
    if (!hasMounted) return; // Don't animate until we are mounted

    gsap.from(titleRef.current, {
      scale: 0.1,
      opacity: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      }
    });

    gsap.to(".celebration-sprite", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.4,
      ease: "power1.inOut"
    });
  }, { scope: container, dependencies: [hasMounted] });

  return (
    <section ref={container} className="h-screen bg-dev-green text-black flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      
      {/* ... (Keep the ticker and main content the same) */}

      <div className="z-10 flex flex-col items-center gap-6">
        <div className="celebration-sprite">
          <DeveloperSprite pose="success" />
        </div>
        
        <div ref={titleRef} className="space-y-4">
          <h2 className="text-7xl md:text-[12rem] font-black leading-none drop-shadow-xl">SHIP IT!</h2>
          <div className="inline-block bg-black text-dev-green px-6 py-2 text-xl md:text-2xl font-bold uppercase transform -rotate-2">
            Build Successful
          </div>
        </div>
        
        {/* ... (Keep the logs and restart button) */}
      </div>

      {/* STEP 2: Only render the random rockets if we have mounted */}
      {hasMounted && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="absolute text-2xl animate-bounce"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
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