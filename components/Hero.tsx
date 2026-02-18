"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, TrendingUp, Zap, Shield } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToVideo = () => {
    const el = document.getElementById("video-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setShowVideo(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00f0ff] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#39ff14] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14] text-sm font-semibold mb-6 uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          Limited Enrollment — Only 17 Spots Remaining
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
          <span className="text-white">The #1 Forex System That Turned</span>
          <br />
          <span
            className="text-[#39ff14]"
            style={{ textShadow: "0 0 30px #39ff1450" }}
          >
            $5,000 Into $847,000
          </span>
          <br />
          <span className="text-white">In Under 14 Months.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          Join{" "}
          <span className="text-[#00f0ff] font-bold">3,000+ students</span> who
          escaped the 9-5 using our proven Urban Trading framework — even with
          zero prior experience.
        </p>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Watch the free training below and discover the exact 3-step system our
          top students use to generate consistent, life-changing returns.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#39ff14]" />
            <span>12,847% avg. return</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#39ff14]" />
            <span>30-Day Money-Back</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#39ff14]" />
            <span>92.4% student win rate</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToVideo}
          className="group relative inline-flex items-center gap-3 px-8 py-5 text-lg sm:text-xl font-black text-black bg-[#39ff14] rounded-xl uppercase tracking-wide cta-pulse hover:bg-[#00f0ff] transition-colors duration-300"
        >
          <span>Watch The Free Training Now</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>

        <p className="mt-4 text-xs text-gray-500">
          Free training reveals the exact system. No credit card required.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#39ff14]/50" />
      </div>
    </section>
  );
}
