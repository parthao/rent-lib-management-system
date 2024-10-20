import React from "react";
import SideMenu from "../SideMenu/SideMenu.tsx";
import DashBoard from "./DashBoard.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "../Pages/User.tsx";
import Property from "../Pages/Property.tsx";
import Bill from "../Pages/Bill.tsx";
import Application from "../Pages/Application.tsx";
import StudentReg from "../Pages/StudentReg.tsx";
import CCTV from "../Pages/CCTV.tsx";
import StudentList from "../Pages/StudentList.tsx";

export default function Landing() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "15% 1fr",
          height: "100vh",
        }}
      >
        <div style={{ backgroundColor: "#062a5a" }}>
          <SideMenu />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="dashboard">
                <DashBoard />
              </div>
            }
          />
          <Route path="User" element={<User />} />
          <Route path="Property" element={<Property />} />
          <Route path="Bill" element={<Bill />} />
          <Route path="Application" element={<Application />} />
          <Route path="StudentReg" element={<StudentReg />} />
          <Route path="StudentList" element={<StudentList />} />
          <Route path="CCTV" element={<CCTV />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
