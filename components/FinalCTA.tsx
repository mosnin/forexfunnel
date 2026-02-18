"use client";

import { ArrowRight, Lock, Shield, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ScarcitySpots from "./ScarcitySpots";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#39ff14]/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#39ff14] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Urgency header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Final Warning — Price Increases In
          </div>

          <CountdownTimer
            initialHours={48}
            label=""
            className="mb-4"
          />
        </div>

        {/* Price comparison */}
        <div className="mb-8">
          <p className="text-gray-400 text-lg mb-2">Current enrollment investment:</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-4xl sm:text-5xl font-black text-gray-600 line-through">
              $7,997
            </span>
            <ArrowRight className="text-[#39ff14] w-8 h-8" />
            <span
              className="text-5xl sm:text-6xl font-black text-[#39ff14]"
              style={{ textShadow: "0 0 30px #39ff1450" }}
            >
              $3,500
            </span>
          </div>
          <p className="text-red-400 font-bold text-lg mt-2">
            Price jumps to $7,997 in 48 hours. No exceptions.
          </p>
        </div>

        {/* Scarcity */}
        <div className="mb-10">
          <ScarcitySpots initial={17} />
        </div>

        {/* CTA Button */}
        <Link href="/step-2">
          <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl font-black text-black bg-[#39ff14] rounded-2xl uppercase tracking-wide cta-pulse hover:bg-[#00f0ff] transition-colors duration-300 shadow-[0_0_60px_rgba(57,255,20,0.3)]">
            <span>Yes, Reserve My Spot Before Price Increases</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#39ff14]" />
            <span>Secure 256-bit SSL checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#39ff14]" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#39ff14]" />
            <span>Instant access upon enrollment</span>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <p className="mt-10 text-gray-600 text-xs max-w-2xl mx-auto leading-relaxed">
          This offer is available for a limited time and may be removed without
          notice. By clicking above, you agree to our Terms of Service and
          Privacy Policy. Past student results are not typical and do not
          guarantee future performance. Trading involves substantial risk of
          loss.
        </p>
      </div>
    </section>
  );
}
