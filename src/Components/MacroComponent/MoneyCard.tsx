import React from 'react'
import '../../css/dashboard.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MoneyCard({heading,iconBackColor,iconColor,Currency,amount,status,icon}:MoneyCardProps) {
  return (
    <div style={{padding:"20px", backgroundColor:"white", borderRadius:"15px"}}>
       
    <div className='moneycard'>{heading}</div>
    
    <div className="row" style={{marginTop:"5px"}}>
     <div className="col-md-6" style={{backgroundColor: iconBackColor,height:"50px",width:"50px",borderRadius:"25px", display: "flex",alignItems: "center",justifyContent: "center"}}><i className={"bi "+ icon} style={{ fontSize: '1.5rem', color: iconColor,marginTop:"5px" }}></i></div>
     <div className='col-md-6' style={{marginTop:"10px", fontSize:"20px",fontWeight:"bold"}}>{Currency}{amount}</div>
     
     
     </div>
     <div className="row" style={{marginTop:"5px"}}>
    <div className='moneycard' style={{color:'#86a1c3'}}>{status}</div>
    </div>
    </div>
   
  )
}
