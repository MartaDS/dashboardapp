import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const cancerCharityDashboard = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 2400 },
    { month: 'Feb', revenue: 2210 },
    { month: 'Mar', revenue: 2290 },
    { month: 'Apr', revenue: 2000 },
  ];

  const mediaData = [
    { name: 'Facebook', revenue: 4000 },
    { name: 'Instagram', revenue: 3000 },
    { name: 'Twitter', revenue: 2000 },
  ];

  const topAdvertisersData = [
    { name: 'Charity A', revenue: 4500 },
    { name: 'Charity B', revenue: 3000 },
    { name: 'Charity C', revenue: 2000 },
  ];

  return (
    <div>
      <h1>Cancer Charity Dashboard</h1>
      <div>
        <h2>Monthly Revenue</h2>
        <LineChart width={600} height={300} data={monthlyData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='revenue' stroke='#8884d8' activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      <div>
        <h2>Media Performance</h2>
        <ul>
          {mediaData.map((item) => (
            <li key={item.name}>{item.name}: ${item.revenue}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Top Advertisers</h2>
        <ul>
          {topAdvertisersData.map((item) => (
            <li key={item.name}>{item.name}: ${item.revenue}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tabs</h2>
        <ul>
          <li>Overview</li>
          <li>Advertisers</li>
          <li>Channels</li>
        </ul>
      </div>
    </div>
  );
};

export default cancerCharityDashboard;