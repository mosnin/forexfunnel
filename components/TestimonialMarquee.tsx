"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Miami, FL",
    quote:
      "Quit my corporate job after month 3. This isn't a course — it's a complete business blueprint. $41k profit last month alone.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_1.jpg",
  },
  {
    name: "Aisha K.",
    location: "Dubai, UAE",
    quote:
      "From $3k to $68k in 5 months. The live trading room alone is worth 10x the price. I finally understand WHY price moves.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_2.jpg",
  },
  {
    name: "James O.",
    location: "London, UK",
    quote:
      "I failed 3 other courses. Urban Trading is completely different. The Discord community caught my errors before I lost a cent.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_3.jpg",
  },
  {
    name: "Sofia R.",
    location: "Toronto, Canada",
    quote:
      "92.4% win rate isn't marketing — my personal account hit 89% last quarter. The entry system is absolutely surgical.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_4.jpg",
  },
  {
    name: "David M.",
    location: "Sydney, Australia",
    quote:
      "My 9-5 salary was $60k/year. I made $82k trading in year one with Urban Trading. The math is insane.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_5.jpg",
  },
  {
    name: "Fatima Al-H.",
    location: "Lagos, Nigeria",
    quote:
      "The algo toolkit alone is worth $10k. I run it every morning and it flags the exact setups I need. Life-changing.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_6.jpg",
  },
  {
    name: "Ryan S.",
    location: "New York, NY",
    quote:
      "Blew two accounts before finding this. Within 60 days of the risk management module I was consistently profitable.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_7.jpg",
  },
  {
    name: "Priya V.",
    location: "Singapore",
    quote:
      "The 1-on-1 strategy call with their top mentor was the turning point. He diagnosed my exact problem in 20 minutes.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_8.jpg",
  },
  {
    name: "Carlos M.",
    location: "Bogotá, Colombia",
    quote:
      "Didn't speak perfect English but the content is so clear. $22k profit in month 4. My family can't believe it.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_9.jpg",
  },
  {
    name: "Liam B.",
    location: "Cape Town, SA",
    quote:
      "Best investment I've ever made — by a long shot. The weekly Q&As keep me accountable and the community is elite.",
    avatar: "https://PLACEHOLDER_TESTIMONIAL_10.jpg",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 mx-3 p-5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#39ff14]/30 transition-colors duration-300">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex-shrink-0 border border-[#39ff14]/20 flex items-center justify-center">
          <span className="text-[#39ff14] font-bold text-sm">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#080808] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm text-center mb-3">
          What Students Are Saying
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center">
          Don&apos;t Take Our Word For It.
          <br />
          <span className="text-[#00f0ff]">Take Theirs.</span>
        </h2>
      </div>

      {/* Marquee track — keyframe defined in globals.css */}
      <div className="marquee-container py-4">
        <div
          className="flex"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
