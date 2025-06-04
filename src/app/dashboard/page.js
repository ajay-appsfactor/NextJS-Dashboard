import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";
import CostBreakdownChart from "../components/CostBreakdownChart";
import MonthlyProfitsCard from "../components/MonthlyProfitsCard";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Signal,
  Filter,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

import TopNavbar from "../components/Navbar";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <TopNavbar />
      <div className="px-4 py-3 flex items-center justify-between flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold mb-1 text-gray-800">
            Welcome to Dashboard
          </h1>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <span className="text-gray-500 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            <span className="text-purple-700 font-medium cursor-pointer">
              Sales Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center text-sm font-medium border border-purple-700 text-purple-700 px-5 py-2 rounded hover:bg-purple-50 transition">
            <ExternalLink className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center text-sm font-medium text-white bg-orange-700 px-5 py-2 rounded hover:bg-orange-800 transition">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Dashboard Card */}
      <div className="flex justify-center items-center gap-6 px-4">
        <DashboardCard
          title="Number Of Sales"
          value="568"
          percentage="+0.7%"
          width="70%"
          barColor="bg-purple-600"
          icon={<TrendingUp className="text-purple-600" />}
        />
        <DashboardCard
          title="New Revenue"
          value="12,897"
          percentage="-043%"
          width="60%"
          barColor="bg-orange-500"
          icon={<TrendingDown className="text-orange-500" />}
        />
        <DashboardCard
          title="Total Cost"
          value="11,234"
          percentage="-1.44%"
          width="55%"
          barColor="bg-green-500"
          icon={<DollarSign className="text-green-500" />}
        />
        <DashboardCard
          title="Profit By Sale"
          value="789"
          percentage="+0.9"
          width="50%"
          barColor="bg-blue-500"
          icon={<Signal className="text-blue-500" />}
        />
      </div>

      <div className="flex px-4 gap-4">
        {/* Sales Chart */}
        <div className="w-full lg:w-[75%]">
          <SalesChart />
        </div>

        {/* CostBreakdown and Monthly Profit Chart */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <CostBreakdownChart />
          <MonthlyProfitsCard />
        </div>
      </div>
    </>
  );
}
