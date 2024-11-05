import React, { useEffect, useState } from "react";
import diaplyINRCurrency from "../helper/displayCurrency";
import axios from "axios";
import Tricker_skeleton from "./Tricker_skeleton";
import Tricker from "./Tricker";

const DisplayTickers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true); // Start loading

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/tickers`
      );
      setData(response.data); // Update state with fetched data
    } catch (err) {
      console.log(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // End loading
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const calculateDifference = (lastPrice, openPrice) => {
    // Convert the prices from strings to numbers
    const last = parseFloat(lastPrice);
    const open = parseFloat(openPrice);

    // Calculate the percentage difference
    if (open === 0) {
      return 0; // Avoid division by zero
    }

    const difference = ((last - open) / open) * 100;
    return difference.toFixed(2); // Return the result rounded to two decimal places
  };

  const calculateSavings = (lastPrice, targetBuyPrice) => {
    // Convert prices from strings to numbers
    const last = parseFloat(lastPrice);
    const target = parseFloat(targetBuyPrice);

    // Check if the last price is lower than the target buy price
    return (target - last).toFixed(2); // Return the savings rounded to two decimal places
  };

  // Example target buy price (can be dynamic based on user input)
  const targetBuyPrice = 100.0;
  return (
    <div className="w-[90%] mx-auto">
      <table
        className="w-full border-collapse mt-10  text-white "
        cellPadding={10}
        cellSpacing={10}
      >
        <thead className="text-2xl font-semibold ">
          <tr>
            <th className="text-start">#</th>
            <th className="text-start">Platform</th>
            <th className="text-start">Last Traded Price</th>
            <th className="text-start">Buy / Sell Price</th>
            <th className="text-start">Difference</th>
            <th className="text-start">Savings</th>
          </tr>
        </thead>
        <tbody className="border-separate border-spacing-y-2">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <Tricker_skeleton key={index} />
              )) // Display 5 skeleton rows
            : Object.values(data).map((item, index) => (
                <Tricker
                  key={data._idx}
                  name={item.base_unit + item.quote_unit}
                  index={index + 1}
                  last={item.last}
                  buy={item.buy}
                  sell={item.sell}
                  difference={calculateDifference(item.last, item.open)}
                  savings={calculateSavings(item.last, targetBuyPrice)}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTickers;
