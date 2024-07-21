import React from 'react'
import '../css/dashboard.css'

export default function MoneyCard({heading}:MoneyCardProps) {
  return (
    
    <div className='moneycard'>{heading}
     <div style={{backgroundColor: "red",height:"60px",width:"60px",borderRadius:"50px"}}>sss</div>
    </div>
   
  )
}
