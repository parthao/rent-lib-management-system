import React from "react";
import ReactDOM from "react-dom/client";
// import MoneyCard from "./Components/MoneyCard.tsx";
// import { CURRENCY } from "./Constants/componentConstants.tsx";
import ProgressBar from "./Components/MicroComponent/ProgressBar.tsx";
// import DashBoard from "./Components/DashBoard.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <DashBoard></DashBoard> */}
    {/* <MoneyCard
      heading="Unpaid expenses"
      iconBackColor="#feedef"
      iconColor="#f25874"
      Currency={CURRENCY.INR}
      amount="14785.145"
      status="2 unpaid"
      icon="bi-bank"
    ></MoneyCard> */}
    <ProgressBar value={30} max={100} />
  </React.StrictMode>
);
