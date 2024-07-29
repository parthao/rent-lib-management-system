import React from 'react'
import SideMenu from '../SideMenu/SideMenu.tsx'
import DashBoard from './DashBoard.tsx'

export default function Landing() {
  return (
    <div  style={{ display: 'grid', gridTemplateColumns: '15% 1fr', height: '100vh' }}>
    <div  style={{ backgroundColor: '#062a5a' }}>
      <SideMenu />
    </div>
    <div className="dashboard">
      <DashBoard />
    </div>
  </div>
  )
}
