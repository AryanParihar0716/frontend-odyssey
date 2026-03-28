"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useGSAP(() => {
    // 1. Smooth Follow Logic (Lerping)
    const moveCursor = (e) => {
      // The main dot follows instantly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      // The "Follower" ring has a slight delay for that liquid feel
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // 2. Hover Interactions (Magnetic Effect)
    const handleMouseEnter = () => {
      gsap.to(followerRef.current, {
        scale: 4,
        backgroundColor: "rgba(255, 255, 255, 1)",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Attach to all buttons and links automatically
    const interactiveElements = document.querySelectorAll("button, a, .skill-card, .cursor-pointer");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* The Central Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-dev-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      />
      
      {/* The Liquid Follower Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-dev-green rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
      >
        {/* This internal div creates the 'fill' effect on hover */}
        <div className="w-full h-full bg-white opacity-0 group-hover:opacity-100" />
      </div>
    </>
  );
}