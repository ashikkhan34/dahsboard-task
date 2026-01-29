"use client";
import { Copy } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";

const BookingLink = () => {
  const handleCopy = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Link Copied to Clipboard",
      showConfirmButton: false,
      timer: 1500,
    });
  };
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
            defaultValue="https://dashboard-app.com/book/ashikkhan"
            className="w-full bg-[#0b1120] border border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/20 bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.35)]
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
