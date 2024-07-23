import React from "react";
import ReactDOM from "react-dom/client";
// import MoneyCard from "./Components/MoneyCard.tsx";
//import { CURRENCY } from "./Constants/componentConstants.tsx";
// import ProgressBar from "./Components/MicroComponent/ProgressBar.tsx";
//import MoneyCardProgress from "./Components/MacroComponent/MoneyCardProgress.tsx";
// import DashBoard from "./Components/MacroComponent/DashBoard.tsx";
import DonutChart from "./Components/MacroComponent/DonutChart.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = [
  { label: "Mac", value: 10 },
  { label: "Blue", value: 20 },
  { label: "Yellow", value: 30 },
  { label: "Green", value: 40 },
];
const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];
root.render(
  <React.StrictMode>
    {/* <DashBoard></DashBoard> */}
    <div style={{ padding: "20px" }}>
      <DonutChart data={data} colors={colors} size={200} />
    </div>
  </React.StrictMode>
);
