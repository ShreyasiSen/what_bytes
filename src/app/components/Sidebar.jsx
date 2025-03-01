import { FaChartBar, FaClipboardList, FaBriefcase } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border border-gray-200 p-6 fixed">
      <nav>
        <ul>
          <li className="mb-4 flex items-center mt-10 text-gray-700 hover:text-blue-700 cursor-pointer">
            <FaChartBar className="mr-6" /> Dashboard
          </li>
          <li className="mb-4 flex items-center cursor-pointer text-blue-700 font-semibold text-md">
            <FaClipboardList className="mr-6" /> Skill Test
          </li>
          <li className="mb-4 flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <FaBriefcase className="mr-6" /> Internship
          </li>
        </ul>
      </nav>
    </aside>
  );
}
