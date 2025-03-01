import Header from "./Header";
import Sidebar from "./Sidebar";
import QuickStats from "./QuickStats";
import ComparisonGraph from "./ComparisonGraph";
import SkillAnalysis from "./SkillAnalysis";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 border border-gray-300"> {/* Added border class */}
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-6">
            <QuickStats />
            <ComparisonGraph />
          </div>

          {/* Right Side */}
          <SkillAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;