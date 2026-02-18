import type { Metadata } from "next";
import CountdownTimer from "@/components/CountdownTimer";
import SocialProofCounter from "@/components/SocialProofCounter";
import FallbackImage from "@/components/FallbackImage";
import {
  CheckCircle2,
  Shield,
  Star,
  ArrowRight,
  Lock,
  Zap,
  Gift,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Application Approved — One-Time Offer | Urban Trading",
  description:
    "Your application has been reviewed. This is a one-time, limited offer that expires soon. Secure your Urban Trading spot now.",
  robots: "noindex",
};

const fullStack = [
  {
    icon: "🏛️",
    title: "Urban Trading Mastermind Group",
    sub: "Live trading room + daily pre-market setups",
    value: "$4,997",
    color: "#39ff14",
  },
  {
    icon: "📈",
    title: "16-Week Accelerated Accelerator",
    sub: "120+ hours of institutional-grade education",
    value: "$3,997",
    color: "#39ff14",
  },
  {
    icon: "💬",
    title: "Private Discord + Trade Copier",
    sub: "24/7 community + live signal alerts",
    value: "$1,997",
    color: "#39ff14",
  },
  {
    icon: "🎯",
    title: "Weekly Live Q&A Sessions",
    sub: "Live chart reviews with senior mentors",
    value: "$2,997",
    color: "#39ff14",
  },
  {
    icon: "♾️",
    title: "Lifetime Access + Updates",
    sub: "Every future module included, no recurring fees",
    value: "$1,497",
    color: "#39ff14",
  },
  {
    icon: "📞",
    title: "1-on-1 Strategy Call (60 min)",
    sub: "Private mentor session — your exact account reviewed",
    value: "$1,997",
    color: "#00f0ff",
    badge: "BONUS",
  },
  {
    icon: "🤖",
    title: "Custom Algo Toolkit — Urban Sentinel",
    sub: "MT4/MT5 indicator suite with 6 proprietary tools",
    value: "$2,497",
    color: "#00f0ff",
    badge: "BONUS",
  },
  {
    icon: "📘",
    title: "Urban Trading Playbook (PDF)",
    sub: "47-page daily playbook used by top students",
    value: "$497",
    color: "#00f0ff",
    badge: "BONUS",
  },
  {
    icon: "📊",
    title: "Prop Firm Fast-Track Module",
    sub: "Pass funded account challenges, trade up to $200k",
    value: "$997",
    color: "#00f0ff",
    badge: "NEW BONUS",
  },
];

const hotseats = [
  {
    name: "David M.",
    location: "Sydney, Australia",
    role: "Former Construction Worker",
    quote:
      "I was in debt, working 60-hour weeks, and my wife was about to leave me because of financial stress. Urban Trading literally saved my family. Year one: $82,000. Now I trade from home while my kids sleep.",
    result: "$82k Year 1",
    avatar: "https://PLACEHOLDER_HOTSEAT_1.jpg",
  },
  {
    name: "Priya V.",
    location: "Singapore",
    role: "Former Nurse — Now Full-Time Trader",
    quote:
      "Healthcare burned me out completely. I was crying in the break room at 34 years old. This program gave me a way out. $31,500 on a single GBP/JPY trade in month 5. I haven't looked back since.",
    result: "$31.5k Single Trade",
    avatar: "https://PLACEHOLDER_HOTSEAT_2.jpg",
  },
  {
    name: "Carlos M.",
    location: "Bogotá, Colombia",
    role: "Former Restaurant Manager",
    quote:
      "English is my second language and I still understood every word of this program. Month 4: $22,000. My family thought I was making this up until I showed them the bank transfer.",
    result: "$22k Month 4",
    avatar: "https://PLACEHOLDER_HOTSEAT_3.jpg",
  },
  {
    name: "Liam B.",
    location: "Cape Town, South Africa",
    role: "Former IT Contractor",
    quote:
      "The algo toolkit alerted me to a massive gold setup at 7am. I entered, set my stop, went for a run, came back to $8,900 profit. That moment broke my brain. I'm never going back to hourly billing.",
    result: "$8.9k Single Trade",
    avatar: "https://PLACEHOLDER_HOTSEAT_4.jpg",
  },
  {
    name: "Rachel N.",
    location: "Paris, France",
    role: "Former Teacher",
    quote:
      "Teachers are underpaid everywhere. I was making $28k a year educating the next generation. Now I make more than that in a quarter trading currencies. The live room is phenomenal.",
    result: "3x Annual Salary",
    avatar: "https://PLACEHOLDER_HOTSEAT_5.jpg",
  },
  {
    name: "Omar F.",
    location: "Dubai, UAE",
    role: "Real Estate Agent → Trader",
    quote:
      "Real estate commissions are inconsistent. Trading is consistent when you have a real system. $140k last year. The 1-on-1 call in month 2 was the single most valuable hour of my financial life.",
    result: "$140k Year 1",
    avatar: "https://PLACEHOLDER_HOTSEAT_6.jpg",
  },
];

export default function Step2Page() {
  return (
    <main className="bg-[#080808] min-h-screen">
      {/* HERO - Application Approved */}
      <section className="relative py-12 sm:py-16 border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000]/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00f0ff] opacity-[0.05] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Application approved badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14] text-sm font-bold uppercase tracking-widest mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Application Approved — Offer Expires In:
          </div>

          {/* Countdown */}
          <CountdownTimer initialHours={2} label="" className="mb-6" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Wait — Your Application Was{" "}
            <span className="text-[#39ff14]">Approved.</span>
            <br />
            But This Offer Disappears In Hours.
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Because you took action and watched the full training, you qualify
            for our{" "}
            <strong className="text-white">
              one-time discounted enrollment
            </strong>{" "}
            — available on this page only, never offered again.
          </p>

          <SocialProofCounter />
        </div>
      </section>

      {/* PRICE - Crossed out / Today Only */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-4">
            One-Time Only — This Page Only
          </p>

          <div className="p-8 sm:p-10 rounded-2xl border-2 border-[#39ff14] bg-[#0d1a0d] relative">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(57,255,20,0.12)" }}
            />

            {/* Crossed-out price */}
            <div className="mb-4">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
                Regular Enrollment Price
              </p>
              <p className="text-4xl sm:text-5xl font-black text-gray-600 line-through">
                $7,997
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#1a1a1a] my-4" />

            {/* Today's price */}
            <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-2">
              Today Only — This Page Only
            </p>
            <p
              className="text-6xl sm:text-7xl font-black text-[#39ff14] mb-2"
              style={{ textShadow: "0 0 40px #39ff1450" }}
            >
              $3,500
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Or choose the payment plan below
            </p>

            {/* Payment plan */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] font-bold text-lg mb-8">
              Or 4 × $997/month — Interest Free
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://checkout.PLACEHOLDER.com/urban-3500"
                className="block w-full px-8 py-5 text-xl font-black text-black bg-[#39ff14] rounded-xl text-center cta-pulse hover:bg-[#00f0ff] transition-colors duration-300"
              >
                YES — I Want Full Access for $3,500
                <span className="block text-sm font-semibold mt-1 opacity-80">
                  One-time payment — instant access
                </span>
              </a>

              <a
                href="https://checkout.PLACEHOLDER.com/urban-plan"
                className="block w-full px-8 py-4 text-lg font-black text-white border-2 border-[#00f0ff] rounded-xl text-center hover:bg-[#00f0ff]/10 transition-colors duration-300"
              >
                Payment Plan — 4 × $997/month
                <span className="block text-sm font-normal text-gray-400 mt-0.5">
                  First payment today, then monthly
                </span>
              </a>
            </div>

            {/* Trust icons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#39ff14]" />
                256-bit SSL
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#39ff14]" />
                30-Day Guarantee
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#39ff14]" />
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER STACK - Full */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
              Everything Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              The Complete Urban Trading Stack
            </h2>
            <p className="text-gray-400 mt-3">
              Total value over $20,000. Yours today for $3,500.
            </p>
          </div>

          <div className="space-y-3">
            {fullStack.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    {item.badge && (
                      <span
                        className="inline-flex text-xs font-black px-2 py-0.5 rounded w-fit"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                    <p
                      className="font-bold"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-0.5">{item.sub}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-gray-600 text-xs line-through">
                    {item.value}
                  </p>
                  <CheckCircle2
                    className="w-5 h-5 mt-1 ml-auto"
                    style={{ color: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Total value summary */}
          <div className="mt-6 p-5 rounded-xl border border-[#39ff14]/20 bg-[#0d1a0d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">
                Total Value
              </p>
              <p className="text-3xl font-black text-gray-600 line-through">
                $20,476
              </p>
            </div>
            <ArrowRight className="text-[#39ff14] w-6 h-6 hidden sm:block" />
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm uppercase tracking-wide">
                Your Price Today
              </p>
              <p
                className="text-4xl font-black text-[#39ff14]"
                style={{ textShadow: "0 0 20px #39ff1440" }}
              >
                $3,500
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOTSEAT TESTIMONIALS */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
              Student Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Real People. <span className="text-[#00f0ff]">Real Results.</span>
              <br />
              Real Screenshots.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotseats.map((h, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#39ff14]/20 transition-all duration-300"
              >
                {/* Photo */}
                <div className="aspect-video bg-[#111] overflow-hidden">
                  <FallbackImage
                    src={h.avatar}
                    alt={h.name}
                    className="w-full h-full object-cover"
                    fallbackContent={
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1a0d] to-[#111]">
                        <div className="text-5xl mb-2">🎯</div>
                        <div className="text-[#39ff14] font-black">{h.result}</div>
                      </div>
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Result badge */}
                  <div className="inline-flex items-center px-2 py-1 rounded-md bg-[#39ff14]/10 text-[#39ff14] text-xs font-bold mb-3">
                    {h.result}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    &ldquo;{h.quote}&rdquo;
                  </p>

                  <div className="pt-3 border-t border-[#1a1a1a]">
                    <p className="text-white font-bold text-sm">{h.name}</p>
                    <p className="text-gray-500 text-xs">{h.role}</p>
                    <p className="text-gray-600 text-xs">{h.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK REVERSAL */}
      <section className="py-16 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-10 rounded-2xl border border-[#39ff14]/20 bg-[#0d1a0d]">
            <Shield className="w-16 h-16 text-[#39ff14] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              The Urban Trading 30-Day
              <br />
              <span className="text-[#39ff14]">Show-Up Guarantee</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto mb-6">
              We are so confident in our system that we offer this: if you
              complete the first 4 weeks of material, attend at least 3 live
              sessions, implement the trades using our framework, and{" "}
              <strong className="text-white">genuinely don&apos;t see results</strong> —
              we will refund every single penny within 48 hours. No
              questions asked. You even keep the PDF playbook.
            </p>
            <p className="text-gray-500 text-sm">
              We&apos;ve processed fewer than 12 refund requests across 3,000+
              students. That&apos;s less than 0.4%. The system works when you
              work it.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#39ff14] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Last Chance. This Offer Expires When The Timer Hits Zero.
          </h2>

          <CountdownTimer
            initialHours={2}
            label="This offer disappears in"
            className="mb-8"
          />

          {/* Price reminder */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl font-black text-gray-600 line-through">
                $7,997
              </span>
              <span
                className="text-5xl font-black text-[#39ff14]"
                style={{ textShadow: "0 0 30px #39ff1440" }}
              >
                $3,500
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Or 4 × $997 payment plan — available below
            </p>
          </div>

          {/* Social proof scarcity */}
          <div className="mb-8">
            <SocialProofCounter />
          </div>

          {/* CTA buttons */}
          <div className="space-y-4">
            <a
              href="https://checkout.PLACEHOLDER.com/urban-3500"
              className="group flex items-center justify-center gap-3 w-full px-8 py-5 text-xl font-black text-black bg-[#39ff14] rounded-2xl cta-pulse hover:bg-[#00f0ff] transition-colors duration-300 shadow-[0_0_60px_rgba(57,255,20,0.25)]"
            >
              <span>YES — Secure My Spot for $3,500</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://checkout.PLACEHOLDER.com/urban-plan"
              className="block w-full px-8 py-4 text-lg font-black text-white border-2 border-[#00f0ff] rounded-2xl text-center hover:bg-[#00f0ff]/10 transition-colors duration-300"
            >
              I Prefer the Payment Plan — 4 × $997/month
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#39ff14]" />
              Secure checkout
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#39ff14]" />
              30-day guarantee
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#39ff14]" />
              3,000+ students
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER with disclaimer */}
      <footer className="bg-[#060606] border-t border-[#111] py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-[#39ff14] font-black text-xl">Urban Trading</p>

          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
            <strong className="text-gray-400">EARNINGS DISCLAIMER:</strong>{" "}
            Results mentioned on this page are not typical. Individual results
            will vary based on many factors including effort, experience,
            capital, and market conditions. The testimonials and examples shown
            are exceptional results and do not guarantee similar outcomes for
            others. Urban Trading LLC provides educational content only and does
            not provide financial, investment, or trading advice. Trading forex
            and other financial instruments involves substantial risk of loss.
            Never invest more than you can afford to lose completely.
          </p>

          <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
            <strong className="text-gray-400">RISK DISCLAIMER:</strong> Past
            performance is not indicative of future results. The forex market
            is highly volatile and unpredictable. Trading on margin increases
            risk. Urban Trading LLC is not a registered investment advisor,
            broker-dealer, or financial planner. All information is for
            educational purposes only.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-xs">
            <span>
              © {new Date().getFullYear()} Urban Trading LLC. All Rights
              Reserved.
            </span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Earnings Disclaimer
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Refund Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
