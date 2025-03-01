"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useBar } from "../../context/barContext";

const ComparisonGraph = ({ p }) => {
    const averagePercentile = 72;
    const { updateBar } = useBar();
    const [percentile, setPercentile] = useState(0);

    useEffect(() => {
        const storedPercentile = parseFloat(localStorage.getItem("Percentile")) || 0;
        setPercentile(storedPercentile);
    }, [updateBar]);

    const data = [
        { x: 0, y: 1 },
        { x: 5, y: 3 },
        { x: 10, y: 7 },
        { x: 20, y: 15 },
        { x: 30, y: 30 },
        { x: 40, y: 50 },
        { x: 50, y: 80 },
        { x: 60, y: 90 },
        { x: 70, y: 70 },
        { x: 80, y: 30 },
        { x: 90, y: 10 },
        { x: 100, y: 2 },
    ];

    return (
        <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-300 w-full">
   
            <div className="flex flex-row justify-between items-center">
                <h3 className="font-bold text-lg md:text-xl text-black">Comparison Graph</h3>
                <span className="text-lg md:text-2xl">📈</span>
            </div>

            <p className="text-gray-600 text-sm md:text-md text-center md:text-left mt-2">
                <span className="font-extrabold text-gray-600">You scored {percentile}% percentile</span>, which is
                {percentile < averagePercentile ? " lower" : " higher"} than the <br />
                average percentile <span className=" text-gray-600">{averagePercentile}%</span> of all engineers who took this assessment.
            </p>

            <div className="w-full h-52 md:h-60 lg:h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="x" domain={[0, 100]} />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="y" stroke="#6366F1" dot={{ r: 3 }} />
                        <ReferenceLine x={percentile} stroke="gray" strokeWidth={2} strokeDasharray="3 3" label="Your Score" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(ComparisonGraph), { ssr: false });
