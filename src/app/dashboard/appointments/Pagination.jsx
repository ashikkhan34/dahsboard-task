"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 11;

  const renderPageNumbers = () => {
    const pages = [1, 2, 3, 4, 5];

    return (
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
              currentPage === page
                ? "bg-[#a3c7ff] text-[#0a192f] rounded-sm"
                : "text-[#3b82f6] hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="text-[#3b82f6] px-1">...</span>

        <button
          onClick={() => setCurrentPage(totalPages)}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            currentPage === totalPages
              ? "bg-[#a3c7ff] text-[#0a192f]"
              : "text-[#3b82f6] hover:text-white"
          }`}
        >
          {totalPages}
        </button>
      </div>
    );
  };

  return (
    <div className="flex text-xs items-center justify-center mt-10 select-none">
      <div className="flex items-center space-x-6">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center text-[#4b5563] hover:text-gray-300 disabled:opacity-50 transition-colors"
        >
          <ChevronLeft size={18} className="mr-1 text-white" />
          <span className="text-sm hidden md:block text-gray-300">
            Previous
          </span>
        </button>

        {renderPageNumbers()}

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="flex items-center text-[#3b82f6] hover:text-blue-400 disabled:opacity-50 transition-colors"
        >
          <span className="text-sm hidden md:block">Next</span>
          <ChevronRight size={18} className="ml-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
