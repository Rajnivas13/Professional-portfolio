"use client";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { Clients } from "@/components/Clients";
import Timeline from "@/components/Timeline";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center min-h-screen flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full py-2">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Timeline />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
