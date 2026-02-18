"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialHours?: number;
  className?: string;
  compact?: boolean;
  label?: string;
}

export default function CountdownTimer({
  initialHours = 48,
  className = "",
  compact = false,
  label = "Price increases in",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const key = `urban_trading_deadline_${initialHours}`;
    let deadline = parseInt(localStorage.getItem(key) || "0");

    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + initialHours * 60 * 60 * 1000;
      localStorage.setItem(key, deadline.toString());
    }

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, deadline - now);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [initialHours]);

  if (!timeLeft) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-16 h-12 bg-[#1a1a1a] rounded animate-pulse" />
        <div className="w-16 h-12 bg-[#1a1a1a] rounded animate-pulse" />
        <div className="w-16 h-12 bg-[#1a1a1a] rounded animate-pulse" />
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  if (compact) {
    return (
      <span className={`font-mono font-black text-red-500 ${className}`}>
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-3">
          {label}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {[
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((unit, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center">
              <div className="w-16 sm:w-20 h-14 sm:h-16 flex items-center justify-center rounded-xl bg-[#1a0000] border border-red-900/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <span className="text-2xl sm:text-3xl font-black text-red-500 font-mono tabular-nums">
                  {pad(unit.value)}
                </span>
              </div>
              <span className="text-gray-600 text-xs mt-1 uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
            {i < 2 && (
              <span className="text-red-500 text-2xl font-black -mt-4 select-none">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
