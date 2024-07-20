import React from 'react';


  function BarChart({data, width = 600, height = 400 }:BarChartProps)
  {
    const maxValue = Math.max(...data.map(d => d.value));
    const barWidth = width / data.length;
  

    return (
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * height;
          return (
            <g key={i}>
              <rect
                x={i * barWidth}
                y={height - barHeight}
                width={barWidth - 10}
                height={barHeight}
                fill="teal"
              />
              <text
                x={i * barWidth + (barWidth - 10) / 2}
                y={height - barHeight - 5}
                textAnchor="middle"
                fill="black"
              >
                {d.value}
              </text>
              <text
                x={i * barWidth + (barWidth - 10) / 2}
                y={height - 5}
                textAnchor="middle"
                fill="black"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }
  export default BarChart;