"use client";

const profitData = [
  { month: "This Month", percent: 75, barColor :"bg-indigo-500" },
  { month: "Last Month", percent: 50 ,barColor :"bg-green-500"},
];

export default function MonthlyProfitsCard() {
  return (
    <div className="bg-white p-4 rounded shadow-sm border">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">Monthly Profits</h3>
      <p className="text-xs text-gray-500 mb-1">Excepteur sint occaecat cupidatat non proident.</p>
       <div className="text-xl font-semibold text-gray-800 mt-2 mb-1">$22,234</div>
      <div className="space-y-4">
        {profitData.map((item) => (
          <div key={item.month}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-400 font-medium">{item.month}</span>
              <span className="text-sm text-gray-400 font-medium">{item.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div
                 className={`${item.barColor} h-1 `}
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
