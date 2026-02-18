"use client";

import { useEffect, useState } from "react";

export default function SocialProofCounter() {
  const [recentClaims, setRecentClaims] = useState(9);
  const [viewing, setViewing] = useState(247);

  useEffect(() => {
    // Simulate real-time viewers
    const viewerInterval = setInterval(() => {
      setViewing((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(200, Math.min(320, prev + change));
      });
    }, 3000);

    // Simulate claims
    const claimInterval = setInterval(() => {
      setRecentClaims((prev) => Math.min(prev + 1, 47));
    }, 45000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(claimInterval);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-gray-400">
          <span className="text-white font-bold">{viewing}</span> people viewing
          this page right now
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
        <span className="text-gray-400">
          <span className="text-red-400 font-bold">{recentClaims} spots</span>{" "}
          claimed in the last 24 hours
        </span>
      </div>
    </div>
  );
}
