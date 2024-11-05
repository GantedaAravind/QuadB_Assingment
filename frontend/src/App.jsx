import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import DisplayTickers from "./components/DisplayTickers";
import BestSeller from "./components/BestSeller";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="mt-8 px-2 sm:px-4">
        {/* Title */}
        <div className="mb-4">
          <p className="text-slate-400 text-xl sm:text-2xl text-center">
            Best Price To Trade
          </p>
        </div>

        {/* BestSeller and DisplayTickers Section */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <BestSeller />
          </div>
          <div>
            <DisplayTickers />
          </div>
        </div>

        {/* Add to Home Screen Button */}
        <div className="text-center mt-4">
          <button className="bg-gray-900 text-cyan-400 border border-cyan-400 px-3 py-2 rounded-md text-sm sm:text-base transition-transform duration-300 hover:scale-105">
            Add hodlinfo to home screen
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
