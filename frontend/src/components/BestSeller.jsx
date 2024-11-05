import React from "react";

const BestSeller = () => {
  return (
    <div className="p-4 w-full text-[#3dc4c4]">
      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* 5 Min Percentage */}
        <div className="flex items-center mb-2 md:mb-0 mr-0 md:mr-4">
          <span className="font-semibold text-base md:text-lg">0.1%</span>
          <span className="text-xs text-gray-400 ml-1">5 Min</span>
        </div>

        {/* 1 Hour Percentage */}
        <div className="flex items-center mb-2 md:mb-0 mr-0 md:mr-4">
          <span className="font-semibold text-base md:text-lg">0.96%</span>
          <span className="text-xs text-gray-400 ml-1">1 Hour</span>
        </div>

        {/* Main Price Display */}
        <div className="flex items-center mb-4 md:mb-0 mr-0 md:mr-4">
          <span className="text-white font-semibold text-3xl md:text-6xl">
            ₹26,56,110
          </span>
        </div>

        {/* 1 Day Percentage */}
        <div className="flex items-center mb-2 md:mb-0 mr-0 md:mr-4">
          <span className="font-semibold text-base md:text-lg">2.73%</span>
          <span className="text-xs text-gray-400 ml-1">1 Day</span>
        </div>

        {/* 7 Days Percentage */}
        <div className="flex items-center">
          <span className="font-semibold text-base md:text-lg">7.51%</span>
          <span className="text-xs text-gray-400 ml-1">7 Days</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-xs text-gray-400 mt-2 text-center">
        Amazon (AMZN) | Nasdaq Global Market
      </div>
    </div>
  );
};

export default BestSeller;
