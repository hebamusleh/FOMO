"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MentorCards from "@/components/sections/MentorCards";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HeroSection/>
        <MentorCards />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
