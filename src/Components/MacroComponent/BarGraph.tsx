import React from 'react';


  function BarChart({data, width = 600, height = 400 }:BarChartProps)
  {
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = width / data.length;
    const ovalHeight = 20; // Height of the oval caps

    return (
      <div style={{padding:"20px", backgroundColor:"white", borderRadius:"15px"}}>
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * (height - 2 * ovalHeight); // Subtracting margins for ovals
          const barX = i * barWidth;
          const barY = height - barHeight - ovalHeight;
          const rectHeight = barHeight; // Height of the middle rectangle
  
          return (
            <g key={i}>
              {/* Top oval */}
              <ellipse
                cx={barX + (barWidth - 30) / 2}
                cy={barY}
                rx={(barWidth - 30) /2 }
                ry={ovalHeight / 2}
                fill="#659eec"
              />
              {/* Middle rectangle */}
              <rect
                x={barX}
                y={barY}
                width={barWidth - 30}
                height={rectHeight}
                fill="#659eec"
              />
         
            
              {/* Category label */}
              <text
                x={barX + (barWidth - 30) / 2}
                y={height - 5}
                textAnchor="middle"
                fill="#aabad1"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      </div>
    );
  }
  export default BarChart;