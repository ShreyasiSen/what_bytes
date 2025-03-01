export default function SkillAnalysis() {
    const topics = [
      { name: "HTML Tools, Forms, History", score: 80, color: "bg-blue-500", textColor: "text-blue-500" },
      { name: "Tags & References in HTML", score: 60, color: "bg-orange-500", textColor: "text-orange-500" },
      { name: "Tables & References in HTML", score: 24, color: "bg-red-500", textColor: "text-red-500" },
      { name: "Tables & CSS Basics", score: 96, color: "bg-green-500", textColor: "text-green-500" },
    ];
  
    return (
      <div className="bg-white px-6 py-4 rounded-lg border border-gray-300 mt-22 w-full max-w-2xl sm:ml-0 md:ml-10 mx-auto">
        <h3 className="font-bold mb-8 text-lg text-black text-center md:text-left mt-4">
          Syllabus Wise Analysis
        </h3>
        
        {topics.map((topic) => (
          <div key={topic.name} className="mb-6">
            <p className="text-md text-gray-600 mb-4">{topic.name}</p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 mb-10">
              {/* Progress Bar */}
              <div className="w-full sm:w-3/4 bg-gray-200 h-2 rounded overflow-hidden">
                <div className={`${topic.color} h-2`} style={{ width: `${topic.score}%` }}></div>
              </div>
              
              {/* Score */}
              <p className={`text-sm font-bold ${topic.textColor}`}>{topic.score}%</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  