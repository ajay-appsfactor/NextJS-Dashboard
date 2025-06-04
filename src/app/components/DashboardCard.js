

export default function DashboardCard({ title, value, percentage, width, barColor, icon }) {
    return (
        <div className="bg-white rounded p-4 shadow-sm border w-full sm:w-[48%] lg:w-[23%]">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-500">{title}</h3>
                <span className="text-xl">{icon}</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">${value}</div>
            <div className="w-full h-1 bg-gray-200">
                <div
                    className={`h-full ${barColor}`}
                    style={{ width }}
                ></div>
            </div>
            <div className="text-sm mt-1 flex items-center justify-between">
                <h5 className="text-gray-400">
                    Last Month
                </h5>
                <span className={`${percentage.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                    {percentage > 0 ? '▲' : '▼'}{percentage}
                </span>
            </div>
        </div>
    )
}