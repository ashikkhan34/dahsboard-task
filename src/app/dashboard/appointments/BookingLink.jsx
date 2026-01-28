import { Copy } from "lucide-react";
import React from "react";

const BookingLink = () => {
  return (
    <div className="w-full bg-[#1A1A2E] border border-slate-800 rounded-xl mt-5 p-5">
      <h2 className="text-sm font-medium mb-4 text-slate-200">
        Your Booking Link
      </h2>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {/* Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            defaultValue="https://yourapp.com/book/ashik"
            className="w-full bg-[#0b1120] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          className="
    flex items-center justify-center gap-2 px-5 py-3 rounded-xl
    bg-gradient-to-b from-[#1e293b] to-[#0f172a]
    border border-slate-700
    text-slate-200 hover:text-white
    transition-all
    shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2),_0_0_15px_rgba(30,58,138,50)]
  "
        >
          <Copy size={18} />
          <span className="text-sm whitespace-nowrap">Copy Link</span>
        </button>
      </div>
    </div>
  );
};

export default BookingLink;
