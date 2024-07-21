import React from 'react'
import '../../css/dashboard.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from '../MicroComponent/ProgressBar.tsx'

export default function MoneyCardProgress({heading,iconBackColor,Currency,amount,icon,iconColor,value,max}:MoneyCardProgressProps) {
    return (
        <div>
           
        <div className='moneycard'>{heading}</div>
        <div className="row" style={{marginTop:"5px"}}>
         <div className="col-md-6" style={{backgroundColor: iconBackColor,height:"50px",width:"50px",borderRadius:"25px", display: "flex",alignItems: "center",justifyContent: "center"}}><i className={"bi "+ icon} style={{ fontSize: '1.5rem', color: iconColor,marginTop:"5px" }}></i></div>
         <div className='col-md-6' style={{marginTop:"10px", fontSize:"20px",fontWeight:"bold"}}>{Currency}{amount}</div>
         
         
         </div>
         <div style={{marginTop:"20px"}}>
       <ProgressBar value={value} max={max}></ProgressBar>
       </div>
        </div>
    
       
      )
}
