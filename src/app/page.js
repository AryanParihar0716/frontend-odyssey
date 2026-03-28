"use client";
import Hero from './components/Hero';
import Intro from './components/Intro';
import Procrastination from './components/Procrastination';
import Debugging from './components/Debugging';
import FinalPush from './components/FinalPush';
import ThemeToggle from './components/ThemeToggle';
import Cursor from './components/Cursor';
export default function Home() {
  return (
    <main className="bg-dev-bg">
      <ThemeToggle />
      <Cursor />
      {/* 5-Section Cohesive Narrative Structure  */}
      <Hero />           {/* Section 1: Hero */}
      <Intro />          {/* Section 2: Introduction */}
     <Procrastination />
     <Debugging /> 
     <FinalPush />
    </main>
  );
}