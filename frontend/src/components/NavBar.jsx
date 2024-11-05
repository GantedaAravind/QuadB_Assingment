import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between font-sans mt-3 space-y-3 md:space-y-0">
      {/* Logo */}
      <div>
        <h2 className="text-[#3dc4c4] text-3xl md:text-4xl font-semibold cursor-pointer">
          HODLINFO
        </h2>
      </div>

      {/* Select Boxes and Buy Button */}
      <div className="flex flex-col sm:flex-row items-center text-white gap-3 md:gap-4 justify-around">
        <div>
          <select className="bg-[#323a5070] px-3 py-1 rounded flex items-center">
            <option value="INR" selected>
              INR
            </option>
          </select>
        </div>
        <div>
          <select className="bg-[#323a5070] px-3 py-1 rounded flex items-center">
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
          </select>
        </div>
        <div className="bg-[#323a5070] px-3 py-1 rounded cursor-pointer">
          BUY BTS
        </div>
      </div>

      {/* Notification and Connect Telegram */}
      <div className="flex items-center justify-around text-lg md:text-xl gap-3 md:gap-4">
        <p className="text-[#3dc4c4] rounded-full border-2 border-[#3dc4c4] px-2 py-1">
          57
        </p>
        <div className="flex items-center gap-2 bg-[#3dc4c4] rounded px-2 py-1">
          <FaTelegramPlane />
          <p className="hidden sm:block">Connect Telegram</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
