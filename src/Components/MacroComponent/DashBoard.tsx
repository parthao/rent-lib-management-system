import React from 'react'
import BarChart from './BarGraph.tsx'
import MoneyCard from './MoneyCard.tsx';
import { CURRENCY } from '../../Constants/componentConstants.tsx';
import MoneyCardProgress from './MoneyCardProgress.tsx';
import DonutChart from './DonutChart.tsx';


const data = [
    { label: "Jan", value: 30 },
    { label: "Feb", value: 20 },
    { label: "Mar", value: 50 },
    { label: "Apr", value: 60 },
    { label: "May", value: 70 },
    { label: "Jun", value: 80 },
    { label: "Jul", value: 100 },
    { label: "Aug", value: 90 },
    { label: "Sep", value: 60 },
    { label: "Oct", value: 50 },
    { label: "Nov", value: 40 },
    { label: "Dec", value: 30 },
  ];

  const dataDonut = [
    { label: "Mac", value: 10 },
    { label: "Blue", value: 20 },
    { label: "Yellow", value: 30 },
    { label: "Green", value: 40 },
  ];
  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

export default function DashBoard() {
  return (
    <div  style={{backgroundColor:"#f3f5f7"}}>
    <h1>Dashboard</h1>
    
    <div className='row'>
      <div className='col-md-5'> 
<MoneyCardProgress
      heading="Unpaid expenses"
      iconBackColor="#feedef"
      iconColor="#f25874"
      Currency={CURRENCY.INR}
      amount="14785.145"
      icon="bi-bank"
      value={30}
      max={100}></MoneyCardProgress>
      </div>

      <div className='col-md-3'>
      <MoneyCard
      heading="Unpaid expenses"
      iconBackColor="#feedef"
      iconColor="#f25874"
      Currency={CURRENCY.INR}
      amount="14785.145"
      status="2 unpaid"
      icon="bi-bank" ></MoneyCard> 
      </div>

      <div className='col-md-2'>
      <MoneyCard
      heading="Unpaid expenses"
      iconBackColor="#feedef"
      iconColor="#f25874"
      Currency={CURRENCY.INR}
      amount="14785.145"
      status="2 unpaid"
      icon="bi-bank" ></MoneyCard> 
      </div>

      <div className='col-md-2'>
      <MoneyCard
      heading="Unpaid expenses"
      iconBackColor="#feedef"
      iconColor="#f25874"
      Currency={CURRENCY.INR}
      amount="14785.145"
      status="2 unpaid"
      icon="bi-bank" ></MoneyCard> 
      </div>
    </div>
    <div className='mt-3'> <BarChart  data={data} /></div>
   

    <div style={{ padding: "20px" }}>
      <DonutChart data={dataDonut} colors={colors} size={200} />
    </div>
     
    </div>
  )
}
