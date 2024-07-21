import React from 'react'
import BarChart from './BarGraph.tsx'


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

export default function DashBoard() {
  return (
    <div>
    <h1>Dashboard</h1>
    <BarChart data={data} />
    </div>
  )
}
