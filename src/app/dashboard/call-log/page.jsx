import React from "react";
import {
  Search,
  ChevronDown,
  Phone,
  Play,
  FileText,
  Clock,
  CheckCircle,
  CirclePause,
} from "lucide-react";

const CallLogPage = () => {
  // Exact fake data following your images
  const callList = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      status: "AI Resolved",
      tag: "Screen",
      duration: "5:23",
      outcome: "Quote Provided",
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      status: "Warm Transfer",
      tag: "Software",
      duration: "5:23",
      outcome: "Escalated",
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      status: "Appointment",
      tag: "Battery",
      duration: "5:23",
      outcome: "Appt. Booked",
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      status: "Dropped",
      tag: "Unknown",
      duration: "0:20",
      outcome: "Call Dropped",
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      status: "AI Resolved",
      tag: "Screen",
      duration: "5:23",
      outcome: "Quote Provided",
    },
  ];

  return (
    <div className="">
      <div className="md:flex  justify-between items-center  mb-8">
        <div className="relative flex-1 md:max-w-[500px] mb-4 md:mb-0 ">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 ml-3 text-slate-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-[#101A3A] border border-slate-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-sm ml-3"
          />
        </div>
        <div className="flex mr-3 gap-5">
          {["All Type", "All Issues", "Today"].map((filter) => (
            <button
              key={filter}
              className="bg-[#101A3A] border gap-3 border-slate-800 px-6 py-2 rounded-lg flex items-center  hover:bg-[#162238] text-sm"
            >
              {filter} <ChevronDown size={16} />
            </button>
          ))}
        </div>
      </div>

      <div className="lg:flex gap-5  px-2">
        {/* Left Side: Call List */}
        <div className="md:w-[480px] h-[643px] bg-[#101A3A] rounded-xl p-5 mb-6">
          <h3 className="text-xl  mb-4">Call List</h3>
          <div className="space-y-2">
            {callList.map((call, idx) => (
              <div
                key={idx}
                className="bg-[#0d1b35] p-4 rounded-xl relative group cursor-pointer  border-b  border-blue-950 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="bg-blue-600 p-2.5 rounded-xl h-fit">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{call.phone}</h4>
                      <p className="text-xs text-slate-500">{call.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full border ${
                      call.status === "AI Resolved"
                        ? "text-emerald-400 border-emerald-900/50 bg-emerald-950/30"
                        : call.status === "Dropped"
                          ? "text-rose-400 border-rose-900/50 bg-rose-950/30"
                          : "text-amber-400 border-amber-900/50 bg-amber-950/30"
                    }`}
                  >
                    {call.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {call.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} /> {call.outcome}
                  </span>
                  <span className="bg-blue-900/40 text-blue-400 px-3 py-0.5 rounded-md">
                    {call.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Call Details with Dotted Border */}
        <div className="md:w-[520px] bg-[#101A3A] rounded-xl p-5 ">
          <h3 className="text-xl mb-4">Call Details</h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-4">
            <div>
              <p className="text-slate-500 text-sm ">Phone Number</p>
              <span className="text-[16px] px-3 py-1 rounded-sm inline-block">
                +1 (555) 123-4567
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm mb-2 font-medium">
                Duration
              </p>
              <p className="text-[16px]">4:32</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm mb-1 font-medium">
                Date & Time
              </p>
              <p className="text-[16px]  ">2025-12-16 10:45 AM</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm mb-2 font-medium">
                Issue Type
              </p>
              <p className="text-[16px]">Screen</p>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-slate-500 text-sm mb-2">Call Type</p>
            <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-900 px-4 py-2 rounded-xl text-sm  uppercase">
              AI Resolved
            </span>
          </div>

          <div className="mb-10">
            <p className="text-slate-500 text-sm font-medium">Outcome</p>
            <p className="text-[16px]">Quote provided</p>
          </div>

          <button className="w-full bg-linear-to-r from-[#2a1b3d] to-[#35224e] text-purple-300 py-4 rounded-xl flex items-center justify-center h-[50px] gap-3 mb-10 transition-colors border border-purple-900/30">
            <div className="bg-purple-300/20 rounded-full p-1">
              <CirclePause />
            </div>
            <span className="text-[#C27AFF] text-lg">Play Audio Recording</span>
          </button>

          <div className="flex items-center gap-2 mb-6 text[16px]">
            <FileText size={20} className="text-blue-500" /> Conversation
            Transcript
          </div>
          <div className="bg-[#17223B] p-6 rounded-2xl border border-slate-800">
            <div className="space-y-5 text-[15px] leading-relaxed">
              <p className="text-[12px]">
                <span className="text-emerald-500 text-sm">AI Assistant:</span>
                <br />
                Thank you for calling UBreakiFix! How can I help you today?
              </p>
              <p className="text-[12px]">
                <span className="text-blue-500 text-sm">Customer:</span>
                <br />
                Hi, my iPhone 13 screen is cracked. How much would it cost to
                repair?
              </p>
              <p className="text-[12px]">
                <span className="text-emerald-500 text-sm">
                  AI Assistant: AI Assistant:
                </span>
                <br />I can help you with that! For an iPhone 13 screen repair,
                our price is $199. This includes parts, labor, and comes with a
                90-day warranty. Would you like to book an appointment?
              </p>
              <p className="text-[12px]">
                <span className="text-blue-500 text-sm">Customer:</span>
                <br />
                Yes, please! When are you available?
              </p>
              <p className="text-[12px]">
                <span className="text-emerald-500 text-sm">AI Assistant:</span>
                <br />
                Great! I have availability today at 2:00 PM or tomorrow at 10:00
                AM. Which works better for you?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogPage;
