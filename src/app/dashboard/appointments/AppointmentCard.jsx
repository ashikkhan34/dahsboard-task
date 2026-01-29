"use client";
import { BadgeAlert, BadgeCheck, Calendar } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

const AppointmentCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between px-3 ">
      <div className="h-[138px] bg-[#0f1837]  rounded-xl p-6  space-y-3">
        <div className="flex items-center gap-2">
          <Calendar size={20} />
          <p className="text-sm text-gray-400">Total Booked</p>
        </div>
        <div>
          <h1 className="text-2xl">
            <CountUp end={65} duration={5}></CountUp>
          </h1>
          <p className="text-sm text-green-500">+8 this week</p>
        </div>
      </div>
      <div className="h-[138px] bg-[#0f1837]  rounded-xl p-6 space-y-3">
        <div className="flex items-center gap-2">
          <BadgeCheck className="text-green-500" />
          <p className="text-sm text-gray-400">AI Booked</p>
        </div>
        <div>
          <h1 className="text-2xl">
            <CountUp end={28} duration={5}></CountUp>
          </h1>
          <p className="text-sm text-green-500">82% of total</p>
        </div>
      </div>
      <div className="h-[138px] bg-[#0f1837]  rounded-xl p-6 space-y-3">
        <div className="flex items-center gap-2">
          <BadgeAlert className="text-yellow-500" />
          <p className="text-sm text-gray-400">Total Booked</p>
        </div>
        <div>
          <h1 className="text-2xl">
            <CountUp end={65} duration={5}></CountUp>
          </h1>
          <p className="text-sm text-green-500">+8 this week</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
