import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/sidemenu.css'

export default function SideMenu() {
   

  return (
    <div style={{backgroundColor: '#062a5a',height:"100vh", position: 'fixed'}}>
        <div className='side-bar-menu-font'>
        MENU
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-boxes side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Dashboard</div>
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-building side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Property</div>
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-currency-rupee side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Transaction</div>
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-file-diff-fill side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Reports</div>
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-window side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Application </div>
        <div className='side-bar-menu-item'>&nbsp;&nbsp;<i className='bi bi-arrow-repeat side-bar-icon'></i>&nbsp;&nbsp;&nbsp;Maintainnanace</div>
        </div>
        
    </div>
    
  )
}
