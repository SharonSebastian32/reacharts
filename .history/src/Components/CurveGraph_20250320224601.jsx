import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const GrowthGraph = () => {
  // Sample data to create the desired curve
  const data = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 45 },
    { name: 'Apr', value: 40 },
    { name: 'May', value: 60 },
    { name: 'Jun', value: 80 },
    { name: 'Jul', value: 85 },
  ];

  // Position for the growth indicator (roughly where the curve starts rising)
  const indicatorPosition = { x: 300, y: 100 };

  return (
    <div className="w-full h-64 bg-white relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4ade80"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Growth indicator */}
      <div className="absolute text-green-400 font-bold text-xl" style={{ left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
        +2%
        <div className="flex justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19L12 5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Light gradient background under the line */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-green-50 to-white opacity-30" style={{
        
      }} />
    </div>
  );
};

export default GrowthGraph;