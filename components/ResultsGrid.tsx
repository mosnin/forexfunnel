"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, BarChart2 } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "12,847%",
    label: "Average return across top 100 students in 14 months",
    sub: "Verified by independent auditors",
    color: "#39ff14",
  },
  {
    icon: BarChart2,
    number: "$5k → $847k",
    label: "Best single student transformation in 14 months",
    sub: "Started with zero prior experience",
    color: "#00f0ff",
  },
  {
    icon: Users,
    number: "3,000+",
    label: "Active students across 41 countries worldwide",
    sub: "New students joining every week",
    color: "#39ff14",
  },
  {
    icon: Award,
    number: "92.4%",
    label: "Student win rate using our proprietary system",
    sub: "Based on last 12 months of tracked trades",
    color: "#00f0ff",
  },
  {
    icon: TrendingUp,
    number: "$2.3M+",
    label: "Total student profits generated last quarter",
    sub: "Q4 2024 verified earnings report",
    color: "#39ff14",
  },
  {
    icon: Award,
    number: "47 Days",
    label: "Average time to first profitable month",
    sub: "Students who complete the 16-week course",
    color: "#00f0ff",
  },
];

export default function ResultsGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39ff14]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-bold uppercase tracking-widest text-sm mb-3">
            The Numbers Don&apos;t Lie
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Real Results.{" "}
            <span className="text-[#39ff14]">Real Students.</span>
            <br />
            Real Money.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These aren&apos;t hypotheticals. These are verified, documented
            results from students inside Urban Trading right now.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border bg-[#0d0d0d] transition-all duration-500 hover:scale-[1.02] group ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  borderColor: `${stat.color}30`,
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: `0 0 40px ${stat.color}08`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 40px ${stat.color}10`,
                  }}
                />
                <Icon
                  className="w-8 h-8 mb-4"
                  style={{ color: stat.color }}
                />
                <div
                  className="text-4xl sm:text-5xl font-black mb-2 leading-none"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}50`,
                  }}
                >
                  {stat.number}
                </div>
                <p className="text-white font-semibold text-base mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-600 text-xs mt-8">
          * Results not typical. Trading involves substantial risk. Past
          performance does not guarantee future results. See full disclaimer
          below.
        </p>
      </div>
    </section>
  );
}
