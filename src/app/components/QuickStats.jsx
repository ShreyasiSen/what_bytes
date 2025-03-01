"use client";
import React, { useEffect, useState } from "react";
import { useBar } from "../../context/barContext";

export default function QuickStats() {
  const { updateBar } = useBar();
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    setRank(localStorage.getItem("Rank") || "N/A");
    setPercentile(localStorage.getItem("Percentile") || "N/A");
    setScore(localStorage.getItem("Score") || "N/A");
  }, [updateBar]);

  const stats = [
    { icon: "🏆", value: rank, label: "Your Rank" },
    { icon: "📋", value: percentile, label: "Percentile" },
    { icon: "✅", value: `${score}/15`, label: "Correct Answers" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 w-full max-w-3xl mx-auto ">
      <h2 className="text-lg font-bold text-black ">Quick Statistics</h2>

      {/* Grid for Responsive Layout */}
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-4 ${(index + 1) % 3 !== 0 ? "border-r border-gray-300" : ""
              }`}
          >
            <p className="text-2xl bg-gray-200 p-3 rounded-full mr-4">{stat.icon}</p>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-black">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
