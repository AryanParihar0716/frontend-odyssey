"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function DeveloperSprite({ pose = "idle" }) {
  const spriteRef = useRef(null);

  useGSAP(() => {
    // Add a constant "breathing" animation to make him feel alive
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
        {/* Head */}
        <circle cx="50" cy="25" r="10" />
        {/* Body */}
        <line x1="50" y1="35" x2="50" y2="70" />
        
        {/* Dynamic Arms based on Pose */}
        {pose === "hero" && (
          <g> {/* Waking up/Stretching */}
            <path d="M50 45 L30 30" />
            <path d="M50 45 L70 30" />
          </g>
        )}
        {pose === "gaming" && (
          <g> {/* Holding a controller */}
            <path d="M50 50 L35 60 L45 65" />
            <path d="M50 50 L65 60 L55 65" />
            <rect x="40" y="60" width="20" height="10" rx="2" />
          </g>
        )}
        {pose === "debugging" && (
          <g> {/* Head in hands */}
            <path d="M50 45 L35 25" />
            <path d="M50 45 L65 25" />
          </g>
        )}
        {pose === "success" && (
          <g> {/* Cheering */}
            <path d="M50 45 L25 15" />
            <path d="M50 45 L75 15" />
          </g>
        )}

        {/* Legs */}
        <line x1="50" y1="70" x2="35" y2="90" />
        <line x1="50" y1="70" x2="65" y2="90" />
      </svg>
    </div>
  );
}