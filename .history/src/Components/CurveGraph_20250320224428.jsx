import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area } from 'recharts';

const GrowthGraph = ({ data = [], growthRate = '+2%' }) => {
  // Default data if none provided
  const defaultData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 45 },
    { name: 'Apr', value: 40 },
    { name: 'May', value: 60 },
    { name: 'Jun', value: 80 },
    { name: 'Jul', value: 85 },
  ];

  const chartData = data.length > 0 ? data : defaultData;

  return (
    <div className="w-full h-64 bg-white relative overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          
          {/* Gradient fill under the line */}
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#gradientFill)"
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
          
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4ade80"
            strokeWidth={3}
            dot={false}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Growth indicator with animation */}
      <div
        className="absolute text-green-400 font-bold text-xl transition-all duration-500 ease-in-out"
        style={{
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {growthRate}
        <div className="flex justify-center mt-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19L12 5"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12L12 5L19 12"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GrowthGraph;