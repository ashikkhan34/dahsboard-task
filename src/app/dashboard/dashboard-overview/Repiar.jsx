import React from "react";

const Repiar = () => {
  const repairs = [
    { id: 1, label: "Screen Repair", count: 156, percentage: "75%" },
    { id: 2, label: "Battery Replacement", count: 89, percentage: "45%" },
    { id: 3, label: "Back Glass Repair", count: 67, percentage: "35%" },
    { id: 4, label: "Software Issues", count: 45, percentage: "25%" },
  ];

  return (
    <div className="bg-[#0a1425] p-6 rounded-lg flex-1 h-[390px] mt-6 shadow-2xl font-sans text-white">
      {/* Title */}
      <h2 className="text-[20px] text-[#FFFFFF] mb-8">Top Repair Requests</h2>

      <div className="space-y-2">
        {repairs.map((item) => (
          <div key={item.id} className="group">
            {/* Label and Count */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-200 text-sm font-medium">
                {item.label}
              </span>
              <span className="text-[#C0CCDD] text-sm">
                {item.count} requests
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#162235] h-3 rounded-full overflow-hidden">
              {/* Animated Gradient Bar */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 transition-all duration-1000 ease-out"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repiar;
