import { useState } from "react";
import "./App.css";
import NavBar from "./componets/NavBar";
import DisplayTickers from "./componets/DisplayTickers";
import BestSeller from "./componets/BestSeller";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="mt-12 ">
        <div>
          <p className="text-slate-400 text-3xl text-center">
            Best Price To Trade
          </p>
        </div>
        <div>
          <div>
            <BestSeller />
          </div>
          <div>
            <DisplayTickers />
          </div>
        </div>
        <div className="text-center mt-4">
          <button className=" bg-gray-900 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-md">
            Add hodlinfo to home screen
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
