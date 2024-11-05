import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between font-sans mt-3  ">
      <div>
        <h2 className=" text-[#3dc4c4] text-4xl  font-semibold cursor-pointer ">
          HODLINFO
        </h2>
      </div>
      <dv className="flex items-center text-white gap-2 justify-around ">
        <div>
          <select className="bg-[#323a5070] px-3 py-1 rounded flex items-center">
            <option value="INR" selected>
              INR
            </option>
          </select>
        </div>
        <div>
          <select className="bg-[#323a5070] px-3 py-1 rounded flex items-center">
            {/* <select className="bg-[#323a5070] px-3 py-1 rounded flex items-center"> */}
            <option
              className="rounded bg-white text-black"
              value="BTS"
              selected
            >
              BTS
            </option>
            <option className="rounded bg-white text-black" value="BTC">
              BTC
            </option>
            <option className="rounded bg-white text-black" value="ETH">
              ETH
            </option>
            <option className="rounded bg-white text-black" value="XRP">
              XRP
            </option>
            <option className="rounded bg-white text-black" value="LTC">
              LTC
            </option>
            <option className="rounded bg-white text-black" value="DOGE">
              DOGE
            </option>
            <option className="rounded bg-white text-black" value="ADA">
              ADA
            </option>
            <option className="rounded bg-white text-black" value="SOL">
              SOL
            </option>
            <option className="rounded bg-white text-black" value="DOT">
              DOT
            </option>
            <option className="rounded bg-white text-black" value="MATIC">
              MATIC
            </option>
            <option className="rounded bg-white text-black" value="SHIB">
              SHIB
            </option>
            <option className="rounded bg-white text-black" value="BNB">
              BNB
            </option>
            <option className="rounded bg-white text-black" value="AVAX">
              AVAX
            </option>
            <option className="rounded bg-white text-black" value="LINK">
              LINK
            </option>
            <option className="rounded bg-white text-black" value="TRX">
              TRX
            </option>
            <option className="rounded bg-white text-black" value="XLM">
              XLM
            </option>
            <option className="rounded bg-white text-black" value="VET">
              VET
            </option>
            <option className="rounded bg-white text-black" value="ICP">
              ICP
            </option>
            <option className="rounded bg-white text-black" value="FIL">
              FIL
            </option>
            <option className="rounded bg-white text-black" value="SAND">
              SAND
            </option>
            {/* </select> */}
          </select>
        </div>
        <div className="bg-[#323a5070] px-3 py-1 rounded cursor-pointer ">
          BUY BTS
        </div>
      </dv>
      <div className="flex item-center justify-around text-xl gap-2">
        <p className="text-[#3dc4c4] rounded-full border-2 border-[#3dc4c4] px-2 py-1">
          57
        </p>
        <div className="flex items-center gap-2 bg-[#3dc4c4] rounded px-2 py-1 ">
          <div className="">
            <FaTelegramPlane />
          </div>
          <p>Connect Telegram</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
