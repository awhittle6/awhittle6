'use client'
import Hero from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useRouter } from "next/router";

// src/app/page.tsx
export default function HomePage() {
  return (
    <>
    <ParticlesBackground />
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white">
      <Hero />
    </div>
    </>
    );
};