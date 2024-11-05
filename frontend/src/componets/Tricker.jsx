import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import diaplyINRCurrency from "../helper/displayCurrency";

const Tricker = (props) => {
  return (
    <tr
      key={props.base_unit}
      className="bg-[#585f7270] border-8 border-[#191D28]"
    >
      <td className="text-start text-xl">{props.index + 1}</td>
      <td className="text-start">{props.name}</td>
      <td className="text-start">{diaplyINRCurrency(props.last)}</td>
      <td className="text-start">
        {diaplyINRCurrency(props.buy)} / {diaplyINRCurrency(props.sell)}
      </td>
      <td
        className={`text-start flex items-center   ${
          Number(props.difference) >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        <div className="text-2xl">
          {Number(props.difference) >= 0 ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        {props.difference}%
      </td>
      <td
        className={`text-start ${
          Number(props.savings) >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        <div className="flex items-center">
          <div className="text-2xl">
            {Number(props.difference) >= 0 ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          <p>{diaplyINRCurrency(props.savings)}</p>
        </div>
      </td>
    </tr>
  );
};

export default Tricker;
