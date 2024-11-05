import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import diaplyINRCurrency from "../helper/displayCurrency";

const Tricker = ({ index, name, last, buy, sell, difference, savings }) => {
  const isDifferencePositive = Number(difference) >= 0;
  const isSavingsPositive = Number(savings) >= 0;

  return (
    <tr className="bg-[#585f7270] border-8 border-[#191D28]">
      {/* Index */}
      <td className="text-start text-lg md:text-xl p-2">{index}</td>

      {/* Platform Name */}
      <td className="text-start text-sm md:text-base p-2">{name}</td>

      {/* Last Traded Price */}
      <td className="text-start text-sm md:text-base p-2">
        {diaplyINRCurrency(last)}
      </td>

      {/* Buy / Sell Price */}
      <td className="text-start text-sm md:text-base p-2">
        {diaplyINRCurrency(buy)} / {diaplyINRCurrency(sell)}
      </td>

      {/* Difference Percentage */}
      <td
        className={`text-start flex items-center text-sm md:text-base p-2 ${
          isDifferencePositive ? "text-green-500" : "text-red-500"
        }`}
      >
        <div className="text-lg md:text-2xl">
          {isDifferencePositive ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        <span className="ml-1">{difference}%</span>
      </td>

      {/* Savings */}
      <td
        className={`text-start text-sm md:text-base p-2 ${
          isSavingsPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        <div className="flex items-center">
          <div className="text-lg md:text-2xl">
            {isDifferencePositive ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          <span className="ml-1">{diaplyINRCurrency(savings)}</span>
        </div>
      </td>
    </tr>
  );
};

export default Tricker;
