"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const dot = useRef();
  const ring = useRef();

  useGSAP(() => {
    const move = (e) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
    };

    const hover = () => gsap.to(ring.current, { scale: 3.5, backgroundColor: "white", duration: 0.3 });
    const leave = () => gsap.to(ring.current, { scale: 1, backgroundColor: "transparent", duration: 0.3 });

    window.addEventListener("mousemove", move);
    document.querySelectorAll("button, a, .skill-card, .cursor-pointer").forEach(el => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", leave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-1.5 h-1.5 bg-dev-green rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div ref={ring} className="fixed top-0 left-0 w-8 h-8 border border-dev-green rounded-full z-[9998] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 overflow-hidden" />
    </>
  );
}