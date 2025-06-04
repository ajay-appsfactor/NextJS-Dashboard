"use client";

const data = [
  { name: "Marketing", percent: 54, color: "#F97316", value: "67927" },
  { name: "Sales", percent: 33, color: "#6366F1", value: "24789" },
];

export default function CostBreakdownChart() {
  return (
    <div className="bg-white p-4 rounded shadow-sm border mt-8">
      <h3 className="text-sm font-semibold text-gray-700">Cost Breakdown</h3>
      <p className="text-xs text-gray-500 mb-4">
        Excepteur sint occaecat cupidatat non proident.
      </p>

      {/* Circles Side by Side */}
      <div className="flex justify-around">
        {data.map((item) => (
          <div className="flex flex-col items-center" key={item.name}>
            <div className="relative w-10 h-10">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
              {/* Progress circle */}
              <div
                className="absolute inset-0 rounded-full border-4"
                style={{
                  borderColor: item.color,
                  clipPath: "inset(0 0 0 0)",
                  transform: `rotate(-90deg)`,
                  maskImage: `conic-gradient(${item.color} ${item.percent}%, transparent ${item.percent}%)`,
                  WebkitMaskImage: `conic-gradient(${item.color} ${item.percent}%, transparent ${item.percent}%)`,
                }}
              />
            </div>

            <p className="mt-2 text-gray-700 font-medium text-sm">
              {item.name}
            </p>
            <div>
              <h2 className="text-gray-700 font-semibold mb-2">
                $
                {item.value}
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-xs ">
                <span className="mr-1 text-green-500">
                  {item.percent > 0 ? "▲" : "▼"}
                </span>
                {item.percent}% last month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
