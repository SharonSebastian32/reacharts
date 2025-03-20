import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

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

  return (
    <div className="w-full h-64 bg-white relative">
      <ResponsiveContainer width="30%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="" stopOpacity={0.2} />
              <stop offset="95%" stopColor="" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          <Area
            type="monotone"
            dataKey="value"
            stroke=""
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorGradient)"
            dot={false}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </AreaChart>
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
    </div>
  );
};

export default GrowthGraph;