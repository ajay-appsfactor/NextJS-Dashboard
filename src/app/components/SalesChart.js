"use client";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", win: 45, loss: 15 },
  { month: "Feb", win: 20, loss: -10 },
  { month: "Mar", win: 160, loss: -100 },
  { month: "Apr", win: 27, loss: 120 },
  { month: "May", win: 140, loss: 10 },
  { month: "Jun", win: 20, loss: 38 },
  { month: "Jul", win: 54, loss: 43 },
  { month: "Aug", win: 40, loss: 20 },
  { month: "Sep", win: 50, loss: 29 },
  { month: "Oct", win: 120, loss: 30 },
  { month: "Nov", win: 45, loss: 22 },
  { month: "Dec", win: 70, loss: 35 }
];

export default function SalesChart() {
  return (
    <div className="bg-white p-4 mt-8 rounded shadow-sm border">
      <div className="flex items-center  justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Overview of Sales Win/Lost</h3>
          <p className="text-xs text-gray-500 mb-4">Compared to last month sales.</p>
        </div>
        <div className="border border-gray-200">
          <button className="px-3 py-1 text-xs bg-gray-200">Month</button>
          <button className="px-3 py-1 text-xs ">Year</button>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="w-8 h-3 bg-blue-800 inline-block"></span>
          Total Win
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="w-8 h-3 bg-cyan-400 inline-block"></span>
          Total Loss
        </div>
      </div>


      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month"
            tick={{ fontSize: 12 }}
          />
          <YAxis domain={[20, 180]}
            ticks={[20, 40, 60, 80, 100, 120, 140, 160, 180]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{ fontSize: "12px", borderRadius: "8px" }}
            labelStyle={{ color: "#6b7280" }}
          />
          <Area type="monotone" dataKey="win" stackId="1" stroke="#4F46E5" fill="#C7D2FE" name="Win" />
          <Area type="monotone" dataKey="loss" stackId="1" stroke="#06B6D4" fill="#A5F3FC" name="Loss" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
