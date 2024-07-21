import React from "react";
import ReactDOM from "react-dom/client";
import MoneyCard from "./Components/MoneyCard.tsx";
// import DashBoard from "./Components/DashBoard.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <DashBoard></DashBoard> */}
    <MoneyCard heading="Unpaid expenses"></MoneyCard>
  </React.StrictMode>
);
