import React from 'react'
import SideMenu from '../SideMenu/SideMenu.tsx'
import DashBoard from './DashBoard.tsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from '../Pages/User.tsx';
import Property from '../Pages/Property.tsx';

export default function Landing() {
  return (
    <BrowserRouter>
    <div  style={{ display: 'grid', gridTemplateColumns: '15% 1fr', height: '100vh' }}>
    <div  style={{ backgroundColor: '#062a5a' }}>
      <SideMenu />
    </div>
    <Routes>
    <Route path="/" element={<div className="dashboard"><DashBoard /></div>} />
    <Route path="User" element={<User />} />
    <Route path="Property" element={<Property />} />
    
    </Routes>
  </div>
  </BrowserRouter>
  )
}
