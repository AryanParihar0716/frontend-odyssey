"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    document.documentElement.classList.toggle("light");

    // Bonus Animation: A "Flash" effect when entering light mode
    if (newMode) {
      gsap.fromTo("body", 
        { filter: "brightness(9)" }, 
        { filter: "brightness(1)", duration: 0.8 }
      );
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-[100] p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-md hover:scale-110 transition-transform"
      title="Toggle Flashbang Mode"
    >
      {isLight ? "🌑 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
}