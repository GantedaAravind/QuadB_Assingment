import React from "react";

const BestSeller = () => {
  return (
    <div>
      <div class="text-4xl p-4 w-full text-[#3dc4c4]">
        <div class="flex items-center w-full justify-around">
          <div class="flex items-center mr-4">
            <span class=" font-semibold">0.1%</span>
            <span class="text-xs text-gray-400 ml-1">5 Min</span>
          </div>
          <div class="flex items-center mr-4">
            <span class=" font-semibold">0.96%</span>
            <span class="text-xs text-gray-400 ml-1">1 Hour</span>
          </div>
          <div class="flex items-center mr-4">
            <span class="text-white font-semibold text-6xl">₹26,56,110</span>
          </div>
          <div class="flex items-center mr-4">
            <span class="font-semibold">2.73%</span>
            <span class="text-xs text-gray-400 ml-1">1 Day</span>
          </div>
          <div class="flex items-center">
            <span class="font-semibold">7.51%</span>
            <span class="text-xs text-gray-400 ml-1">7 Days</span>
          </div>
        </div>
      </div>
      <div class="text-xs text-gray-400 mt-2 text-center ">
        Amazon (AMZN) | Nasdaq Global Market
      </div>
    </div>
  );
};

export default BestSeller;
