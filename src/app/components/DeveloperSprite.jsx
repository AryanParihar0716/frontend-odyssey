"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function DeveloperSprite({ pose = "idle", accessory = "none" }) {
  const spriteRef = useRef(null);

  useGSAP(() => {
    
    gsap.to(spriteRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div ref={spriteRef} className="w-32 h-32 md:w-48 md:h-48 transition-all duration-500">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[3]">
        
        
        {accessory === "bedhead" && (
          <path d="M42 12 Q 50 2 58 12 Q 65 2 70 15" strokeWidth="2" className="opacity-80" />
        )}
        
        
        {accessory === "glasses" && (
          <g className="fill-current stroke-none">
            <rect x="38" y="22" width="24" height="6" />
            <rect x="38" y="28" width="8" height="6" />
            <rect x="54" y="28" width="8" height="6" />
          </g>
        )}

      
        {accessory === "headset" && (
          <g>
            <path d="M38 25 A 12 12 0 0 1 62 25" strokeWidth="2" />
            <rect x="32" y="18" width="6" height="14" rx="2" fill="current" className="stroke-none" />
            <rect x="62" y="18" width="6" height="14" rx="2" fill="current" className="stroke-none" />
          </g>
        )}
        
       
        {accessory === "tire" && (
          <g className="opacity-50" strokeWidth="1">
            <path d="M42 32 Q 45 35 48 32" />
            <path d="M52 32 Q 55 35 58 32" />
          </g>
        )}

       
        {accessory === "party" && (
          <path d="M50 15 L 40 2 L 60 2 Z" fill="current" className="stroke-none" />
        )}

       
        <circle cx="50" cy="25" r="10" />
        <line x1="50" y1="35" x2="50" y2="70" />
        
        
        {pose === "hero" && (
          <g> 
            <path d="M50 45 L30 30" />
            <path d="M50 45 L70 30" />
          </g>
        )}
        {pose === "gaming" && (
          <g> 
            <path d="M50 50 L35 60 L45 65" />
            <path d="M50 50 L65 60 L55 65" />
            <rect x="42" y="60" width="16" height="8" rx="2" fill="current" className="stroke-none" />
          </g>
        )}
        {pose === "debugging" && (
          <g> 
            <path d="M50 45 L35 25" />
            <path d="M50 45 L65 25" />
          </g>
        )}
        {pose === "success" && (
          <g> 
            <path d="M50 45 L20 20" />
            <path d="M50 45 L80 20" />
          </g>
        )}
        {pose === "idle" && (
          <g> 
            <path d="M50 45 L35 55" />
            <path d="M50 45 L65 55" />
          </g>
        )}

        
        <line x1="50" y1="70" x2="35" y2="90" />
        <line x1="50" y1="70" x2="65" y2="90" />
      </svg>
    </div>
  );
}