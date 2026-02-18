"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID_HERE";

export default function VideoSection() {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="video-section" className="py-16 bg-[#080808] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0a0f0a] to-[#080808] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <p className="text-center text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-4">
          Free Training — Watch Now
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white mb-8">
          "How I Built A{" "}
          <span className="text-[#39ff14]">7-Figure Trading Business</span>{" "}
          Starting From Zero"
        </h2>

        {/* Video wrapper */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#39ff14]/20 shadow-[0_0_60px_rgba(57,255,20,0.1)]">
          <div className="relative pb-[56.25%] h-0">
            {!clicked ? (
              <button
                onClick={() => setClicked(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0d1a0d] group"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#39ff14] flex items-center justify-center shadow-[0_0_40px_rgba(57,255,20,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 text-black ml-1" fill="black" />
                  </div>
                  <span className="text-white font-bold text-lg sm:text-xl">
                    Click to Play Free Training
                  </span>
                  <span className="text-gray-400 text-sm">Duration: 47 minutes</span>
                </div>
              </button>
            ) : (
              <iframe
                src={`${VIDEO_URL}?autoplay=1&rel=0&modestbranding=1`}
                title="Urban Trading Free Training"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Fallback link */}
        <p className="text-center mt-4 text-gray-500 text-sm">
          If the video doesn&apos;t load,{" "}
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00f0ff] hover:underline inline-flex items-center gap-1"
          >
            click here to watch directly
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>

        {/* Below-video urgency */}
        <div className="mt-8 p-4 rounded-xl border border-[#39ff14]/20 bg-[#39ff14]/5 text-center">
          <p className="text-[#39ff14] font-bold text-sm uppercase tracking-wide mb-1">
            Important
          </p>
          <p className="text-gray-300 text-sm">
            Watch the full training before closing this page. We explain the
            exact system and why we&apos;re only accepting{" "}
            <strong className="text-white">17 more students</strong> at this
            price point.
          </p>
        </div>
      </div>
    </section>
  );
}
