"use client";
import {
  ArrowRightLeft,
  BotMessageSquare,
  Calendar,
  CircleX,
  Clock,
  Phone,
} from "lucide-react";
import React from "react";
import CountUp from "react-countup";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">Total Calls Today</p>
          <h1 className=" text-[30px]">
            {" "}
            <CountUp end={127} duration={4} />
          </h1>
          <p className="text-green-500 text-[14px] mt-2">+12%</p>
        </div>
        <div className="bg-[#2B7FFF] w-12 justify-center items-center flex h-12 rounded-lg">
          <Phone></Phone>
        </div>
      </div>
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">AI-Handled Calls</p>
          <h1 className=" text-[30px]">
            {" "}
            <CountUp end={98} duration={5} />
          </h1>
          <p className="text-green-500 text-[14px] mt-2">+77%</p>
        </div>
        <div className="bg-linear-to-r from-[#F6339A] to-[#AD46FF] w-12 justify-center items-center flex h-12 rounded-lg">
          <BotMessageSquare />
        </div>
      </div>
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">Warm Transfer</p>
          <h1 className=" text-[30px]">
            {" "}
            <CountUp end={23} duration={4} />
          </h1>
          <p className="text-green-500 text-[14px] mt-2">+18%</p>
        </div>
        <div className="bg-linear-to-r from-[#FB2C36] to-[#FF6900] w-12 justify-center items-center flex h-12 rounded-lg">
          <ArrowRightLeft />
        </div>
      </div>
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">Appointments Booked</p>
          <h1 className=" text-[30px]">
            {" "}
            <CountUp end={34} duration={5} />
          </h1>
          <p className="text-green-500 text-[14px] mt-2">+8%</p>
        </div>
        <div className="bg-linear-to-r from-[#00BC7D] to-[#00C950] w-12 justify-center items-center flex h-12 rounded-lg">
          <Calendar />
        </div>
      </div>
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">Missed/Failed Calls</p>
          <h1 className=" text-[30px]">
            {" "}
            <CountUp end={6} duration={2} />
          </h1>
          <p className="text-red-500 text-[14px] mt-2">-3%</p>
        </div>
        <div className="bg-[#FB2C36] w-12 justify-center items-center flex h-12 rounded-lg">
          <CircleX />
        </div>
      </div>
      <div className="flex justify-between p-6 bg-[#0E1836] rounded-lg h-[146px]">
        <div>
          <p className="text-gray-500 text-[14px]">Avg Call Duration</p>
          <h1 className=" text-[30px]">
            <CountUp end={42} duration={4}></CountUp>
          </h1>
          <p className="text-green-500 text-[14px] mt-2">+15%</p>
        </div>
        <div className="bg-[#2B7FFF] w-12 justify-center items-center flex h-12 rounded-lg">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Card;
