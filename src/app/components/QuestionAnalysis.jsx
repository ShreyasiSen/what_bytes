"use client";

import dynamic from "next/dynamic";
import "react-circular-progressbar/dist/styles.css";
import { useBar } from "../../context/barContext";
import { useEffect, useState } from "react";

const CircularProgressbar = dynamic(
  () => import("react-circular-progressbar").then((mod) => mod.CircularProgressbar),
  { ssr: false }
);

export default function QuestionAnalysis() {
  const totalQuestions = 15;
  const { updateBar } = useBar();
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const storedScore = parseFloat(localStorage.getItem("Score")) || 0;
    setCorrect(storedScore);
  }, [updateBar]);

  const percentage = Math.round((correct / totalQuestions) * 100);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 mt-2 w-full max-w-2xl sm:ml-0 md:ml-10 mx-auto">
     
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-black text-lg">Question Analysis</h3>
        <span className="text-blue-600 font-semibold">{correct}/{totalQuestions}</span>
      </div>

      <p className="text-gray-600 text-sm sm:text-md mb-10">
        <span className="font-extrabold text-gray-600">
          You scored {correct} question correct out of {totalQuestions}.
        </span>
        However,it still needs some improvement.
      </p>
      
      <div className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto mt-6 mb-20">
        <CircularProgressbar
          value={percentage}
          strokeWidth={12} 
          styles={{
            path: { stroke: "#007bff", strokeWidth: 12 }, 
            trail: { stroke: "#e0e0e0", strokeWidth: 12 },
            text: { fill: "#000", fontSize: "16px", fontWeight: "bold" },
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl">🎯</span>
        </div>
      </div>

    </div>
  );
}
