"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Miami, FL",
    role: "Former Financial Analyst",
    quote:
      "I spent $8k on three other programs before Urban Trading. This is on a completely different level. The live trading room showed me in 2 weeks what I couldn't figure out in 2 years. Month 3: $41k profit.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Lueg_im_SWR1_Studio.jpg",
    result: "+$41,280 Month 3",
  },
  {
    name: "Aisha K.",
    location: "Dubai, UAE",
    role: "Entrepreneur",
    quote:
      "As a woman in a male-dominated industry, I was skeptical of every trading 'guru'. Urban Trading is different. The community is elite, the education is world-class, and the results speak. $68k in 5 months.",
    avatar: "https://people.com/thmb/vkT64nOEKQ4vNrD4kUERJz7m2ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/naomie-pilula-1-082825-0e7952147277416c8797bbc55143a660.jpg",
    result: "$68k in 5 months",
  },
  {
    name: "James O.",
    location: "London, UK",
    role: "Construction Worker → Full-Time Trader",
    quote:
      "I was working 60-hour weeks on sites and falling asleep in front of trading charts. The Urban system was so clear that I could apply it in an hour a day. Q1 this year: $83,000. My crew can't believe it.",
    avatar: "https://preview.redd.it/my-first-selfie-as-a-29-year-old-v0-6u80g47pqq6b1.jpg?width=1080&crop=smart&auto=webp&s=2a9c4bc3ad7c9e0909e4b87acb617cadb38de55f",
    result: "$83,000 Q1 2024",
  },
  {
    name: "Sofia R.",
    location: "Toronto, Canada",
    role: "Nurse → Full-Time Trader",
    quote:
      "Healthcare burned me out. I needed an exit. Urban Trading gave me the exact blueprint. The 1-on-1 call with their head mentor changed everything. Year one: $112k. Year two: already projected double that.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQad5ANxW0IYJDhdyePHagFtr5XrAGVBHLw&s",
    result: "$112k Year 1",
  },
];

export default function TestimonialCards() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            More Student Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Their Stories. <span className="text-[#00f0ff]">Your Future.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 rounded-2xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#39ff14]/20 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#39ff14]/10 group-hover:text-[#39ff14]/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/20 text-[#39ff14] text-xs font-bold uppercase tracking-wide mb-4">
                {t.result}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a1a1a] flex-shrink-0 border border-[#39ff14]/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[#39ff14] font-black text-lg">${t.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                  <p className="text-gray-600 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
