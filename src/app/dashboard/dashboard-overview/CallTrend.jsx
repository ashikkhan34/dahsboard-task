"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 62 },
  { day: "Wed", calls: 55 },
  { day: "Thu", calls: 72 },
  { day: "Fri", calls: 88 },
  { day: "Sat", calls: 95 },
  { day: "Sun", calls: 58 },
];

const CallTrends = () => {
  const totalCalls = data.reduce((acc, cur) => acc + cur.calls, 0);

  return (
    <div className="bg-[#0b1739] rounded-xl p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-semibold text-sm">
            Call Trends - This Week
          </h3>
          <p className="text-xs text-gray-400">Total: {totalCalls} calls</p>
        </div>

        <button className="text-xs text-gray-300 bg-[#0f1d4d] px-3 py-1 rounded-md border border-gray-600">
          <select className=" outline-none bg-[#0f1d4d]">
            <option value="this_week">This Week</option>
            <option value="last_week">Last Week</option>
            <option value="this_month">This Month</option>
            <option value="last_month">Last Month</option>
          </select>
        </button>
      </div>

      {/* Chart */}
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradientCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#326DCF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#326DCF" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0E1836",
                border: "1px solid #334155",
                borderRadius: "6px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#gradientCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrends;
