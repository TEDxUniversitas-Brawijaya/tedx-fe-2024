"use client";

import Section1 from "@/components/mantra-diri/sections/section-1";
import Footer from "@/components/shared/footer";
import Section2 from "../sections/section-2";
import Section3 from "../sections/section-3";
import Section5 from "../sections/section-5";


export default function ClientMantraDiriPage() {
  return (
    <main>
      <div className="relative min-h-screen transition-colors duration-1000">
        <Section1 />
        <Section2 />
        <Section3 />
        {/* <Section4 /> */}
        <Section5 />
      </div>
      <Footer />
    </main>
  );
}
