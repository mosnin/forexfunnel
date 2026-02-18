"use client";

import { useEffect, useState } from "react";

interface ScarcitySpotsProps {
  initial?: number;
}

export default function ScarcitySpots({ initial = 17 }: ScarcitySpotsProps) {
  const [spots, setSpots] = useState(initial);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    // Simulate spots being claimed over time
    const intervals = [8000, 15000, 27000, 42000, 63000];
    const timers = intervals.map((ms, i) =>
      setTimeout(() => {
        setSpots((prev) => Math.max(prev - 1, 3));
        if (i === intervals.length - 1) setClaimed(true);
      }, ms)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>
        <span className="text-red-400 font-black text-xl sm:text-2xl">
          Only {spots} spots remaining
        </span>
      </div>
      <p className="text-gray-500 text-sm">
        {claimed ? "Someone just claimed a spot" : "At current pricing"}
      </p>
    </div>
  );
}
