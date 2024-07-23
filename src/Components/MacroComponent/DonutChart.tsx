import React from 'react'
import { useState } from 'react';

export default function DonutChart({ data,
  colors,
  size = 200,
  innerRadius = 50 }:DonutChartProps) {
    const [tooltip, setTooltip] = useState<{ visible: boolean, x: number, y: number, label: string }>({ visible: false, x: 0, y: 0, label: '' });
 
    const totalValue = data.reduce((acc, datum) => acc + datum.value, 0);
  let cumulativeValue = 0;
   
  const defaultColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

  const radius = size / 2;
  const innerCircleRadius = (innerRadius / 100) * radius;


  const handleMouseOver = (event: React.MouseEvent<SVGPathElement>, label: string) => {
    event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: event.clientX ,
      y: event.clientY,
      label
    });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, x: 0, y: 0, label: '' });
  };


  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((datum, index) => {
        const [startX, startY] = getCoordinatesForPercent(cumulativeValue / totalValue, radius);
        cumulativeValue += datum.value;
        const [endX, endY] = getCoordinatesForPercent(cumulativeValue / totalValue, radius);

        const largeArcFlag = datum.value / totalValue > 0.5 ? 1 : 0;

        const pathData = [
          `M ${radius} ${radius}`, // Move
          `L ${startX} ${startY}`, // Line
          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          'Z' // Close
        ].join(' ');

        return (
          <path
            key={index}
            d={pathData}
            fill={colors ? colors[index % colors.length] : defaultColors[index % defaultColors.length]}
            onMouseOver={(e) => handleMouseOver(e, datum.label)}
            onMouseOut={handleMouseOut}
          />
        );
      })}
      <circle cx={radius} cy={radius} r={innerCircleRadius} fill="white" />
    </svg>
    {tooltip.visible && (
      <div
        style={{
          position: 'absolute',
          top: tooltip.y,
          left: tooltip.x,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '5px',
          borderRadius: '3px',
          pointerEvents: 'none',
          transform: 'translate(-50%, -100%)'
        }}
      >
        {tooltip.label}
      </div>
    )}
  </div>
  )
}

const getCoordinatesForPercent = (percent: number, radius: number): [number, number] => {
  const x = Math.cos(2 * Math.PI * percent - Math.PI / 2) * radius + radius;
  const y = Math.sin(2 * Math.PI * percent - Math.PI / 2) * radius + radius;
  return [x, y];
};