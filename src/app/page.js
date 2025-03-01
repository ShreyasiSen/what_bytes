"use client";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SkillTestCard from "./components/SkillTestCard";
import QuickStats from "./components/QuickStats";
import SkillAnalysis from "./components/SkillAnalysis";
import ComparisonGraph from "./components/ComparisonGraph";
import QuestionAnalysis from "./components/QuestionAnalysis";
import { BarProvider } from "../context/barContext";  

export default function Home() {
  return (
    <BarProvider>
      <div className="flex flex-col bg-white min-h-screen mb-40 w-full z-10 overflow-x-hidden 
                      sm:flex sm:items-center sm:justify-center sm:min-h-screen
                      md:flex md:items-start md:justify-start md:min-h-screen">

        <Header />

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-20 mt-[4.5rem] px-4 sm:px-6 md:px-20 md:mt-20 md:pl-10 lg:pr-16 lg:pl-0 lg:mt-20
                        sm:w-full sm:max-w-lg md:max-w-none">
          
          {/* Sidebar */}
          <aside className="md:w-1/4 lg:w-1/5 hidden md:hidden lg:block">
            <Sidebar />
          </aside>
          
          {/* Main Content */}
          <main className="flex flex-col md:flex-row w-full md:ml-10">
            {/* Left Section (Skill Test & Stats) */}
            <section className="flex flex-col gap-6 w-full md:w-2/3">
              <SkillTestCard />
              <QuickStats rank={1} percentile={30} correct={10} />
              <ComparisonGraph percentile={90} />
            </section>

            {/* Right Section (Skill & Question Analysis) */}
            <section className="flex flex-col gap-6 w-full md:w-1/2 mt-12 md:mt-0">
              <SkillAnalysis />
              <QuestionAnalysis correct={12} />
            </section>
          </main>
        </div>
      </div>
    </BarProvider>
  );
}