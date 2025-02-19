"use client";

import Section1 from "@/components/mantra-diri/sections/section-1";
import Footer from "@/components/shared/footer";

export default function ClientMantraDiriPage() {
  return (
    <main>
      <div className="relative min-h-screen transition-colors duration-1000">
        <Section1 />
      </div>
      <Footer />
    </main>
  );
}
