"use client";
import React, { useState } from "react";
import { useBar } from "../../context/barContext";

export default function SkillTestCard({ }) {
  const [modal, setModal] = useState(false);
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [score, setScore] = useState('');
  const { updateBar, setUpdateBar } = useBar();

  const saved = (e) => {
    e.preventDefault();
    localStorage.setItem("Rank", rank);
    localStorage.setItem("Percentile", percentile);
    localStorage.setItem("Score", score);
    setUpdateBar(!updateBar);
    setModal(false);
  };

  return (
    <div>

      <h1 className="text-xl font-semibold text-gray-800 mt-11">Skill Test</h1>
      <div className="">
        <div className="flex flex-col md:flex-row items-center bg-white px-2 py-8 rounded-lg border border-gray-300 mt-4  w-full max-w-3xl mx-auto">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img src="./html_1.png" alt="HTML5 Logo" className="w-16 h-16" />
          </div>

          <div className="flex-grow text-center md:text-left">
            <h2 className="text-lg text-black font-semibold">{"Hyper Text Markup Language"}</h2>
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-medium"></span> Questions: 08 |{" "}
              <span className="font-medium">Duration: 15 mins</span> | Submitted on{" "}
              <span className="font-medium">3rd March 2025</span>
            </p>
          </div>

          <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm mt-4 md:mt-0 cursor-pointer" onClick={() => setModal(true)}>
            Update
          </button>
        </div>

        {modal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
              <div className="flex items-center mb-8 justify-between">
                <h2 className="text-black font-bold text-2xl">Update Scores</h2>
                <div className="flex-shrink-0">
                  <img src="./html_1.png" alt="HTML5 Logo" className="w-8 h-8" />
                </div>
              </div>

              <form onSubmit={saved}>
         
                <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-4 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-sm">
                      1
                    </div>
                    <label className="text-md text-black ml-1">
                      Update your <span className="font-bold text-md text-black">Rank</span>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="number"
                      className="w-full md:w-40 border border-gray-300 text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Rank"
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                    />

                    {(!rank || isNaN(rank)) && (
                      <p className="text-red-500 text-sm mt-1">required | should be a number</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 mt-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-4 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-sm">
                      2
                    </div>
                    <label className="text-md text-black ml-1">
                      Update your <span className="font-bold text-md text-black">Percentile</span>
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="number"
                      className="w-full md:w-40 border border-gray-300 text-black rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Percentile"
                      value={percentile}
                      onChange={(e) => setPercentile(e.target.value)}
                    />

                    {(!percentile || isNaN(percentile)) && (
                      <p className="text-red-500 text-sm mt-1">required | percentile 0-100</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-7.5 h-6.5 mr-4 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-sm">
                      3
                    </div>
                    <label className="text-md text-black ml-1">
                      Update your <span className="font-bold text-md text-black">Current Score (out of 15)</span>
                    </label>
                  </div>
                  <input
                    type="number"
                    className="w-full md:w-40 border border-gray-300 rounded-md px-3 text-black py-2"
                    placeholder="Current Score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <button type="button" className="cursor-pointer font-bold  text-blue-900 px-2 mr-6 border-1 border-blue-900 py-2 rounded-md" onClick={() => setModal(false)}>
                    cancel
                  </button>
                  <button type="submit" className="bg-blue-900 cursor-pointer font-bold text-white px-8 border-2 border-black py-2 rounded-md" onClick={() => setUpdateBar(!updateBar)}>
                    save →
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
