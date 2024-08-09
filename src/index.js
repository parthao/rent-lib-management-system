import React from "react";
import ReactDOM from "react-dom/client";
// import MoneyCard from "./Components/MoneyCard.tsx";
//import { CURRENCY } from "./Constants/componentConstants.tsx";
// import ProgressBar from "./Components/MicroComponent/ProgressBar.tsx";
//import MoneyCardProgress from "./Components/MacroComponent/MoneyCardProgress.tsx";
import Landing from "./Components/MacroComponent/Landing.tsx";
//import DonutChart from "./Components/MacroComponent/DonutChart.tsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Landing></Landing>
  </React.StrictMode>
);
