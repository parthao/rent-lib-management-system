import React from 'react'

export default function ProgressBar({value,max,backgroundColor = '#e0e0e0', progressColor = '#24cd9f',height = '20px'}:ProgressBarProps) {
    const percentage = (value / max) * 100;
    return (
        <div style={{ backgroundColor, width: '100%', borderRadius: '10px', overflow: 'hidden', height }}>
          <div style={{ width: `${percentage}%`, backgroundColor: progressColor, height: '100%' }}></div>
        </div>
      );
}
