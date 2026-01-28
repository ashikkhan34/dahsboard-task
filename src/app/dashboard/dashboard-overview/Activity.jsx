import React from "react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      statusColor: "bg-green-500",
      title: "AI generated invoice for Samsung S24 Ultra",
      time: "1 min ago",
    },
    {
      id: 2,
      statusColor: "bg-orange-500",
      title: "Technician assigned to Laptop hardware repair",
      time: "4 min ago",
    },
    {
      id: 3,
      statusColor: "bg-green-500",
      title: "Diagnostic report sent for MacBook Pro",
      time: "7 min ago",
    },
    {
      id: 4,
      statusColor: "bg-red-500",
      title: "Payment failed for Order #98234",
      time: "20 min ago",
    },
  ];

  return (
    <div className="bg-[#0a192f] p-6 rounded-lg flex-1 h-[390px] shadow-xl mt-6">
      <h2 className="text-white text-[20px]  mb-2 pb-2">Recent Activity</h2>

      <div className="space-y-3 rounded-md">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#151e2d] p-4 rounded-md h-[64px] flex items-start gap-3 hover:bg-[#1d335a] transition-colors cursor-pointer"
          >
            {/* Status Dot */}
            <div
              className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${activity.statusColor}`}
            ></div>

            {/* Text Content */}
            <div className="flex flex-col">
              <span className="text-gray-200 text-sm leading-tight">
                {activity.title}
              </span>
              <span className="text-gray-500 text-[12px] mt-1">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
