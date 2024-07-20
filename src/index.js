import React from "react";
import ReactDOM from "react-dom/client";
import BarChart from "./Components/BarGraph.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = [
  { label: "January", value: 30 },
  { label: "February", value: 20 },
  { label: "March", value: 50 },
  { label: "April", value: 60 },
  { label: "May", value: 70 },
  { label: "June", value: 80 },
  { label: "July", value: 100 },
  { label: "August", value: 90 },
  { label: "September", value: 60 },
  { label: "October", value: 50 },
  { label: "November", value: 40 },
  { label: "December", value: 30 },
];

root.render(
  <React.StrictMode>
    <BarChart data={data} />
  </React.StrictMode>
);
