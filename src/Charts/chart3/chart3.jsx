import React from 'react';
import { PieChart, Pie, Cell, Sector, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './chart3.css'
const data = [
  { name: 'Red', value: 40 },
  { name: 'Blue', value: 30 },
  { name: 'Yellow', value: 30 },
];

const dataScatter = [
  { x: -10, y: 1 },
  { x: 10, y: 5 },
  { x: 0, y: 3 },
  { x: 20, y: -30 },
  { x: 40, y: 4 },
  { x: -30, y: 15 },
  { x: -25, y: 6 },
];

const COLORS = ['#FF6962', '#4DD0E1', '#FFCE56'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle *RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart3 = () => {
  return (
    <div className="container">
      <div className="chart-container">
        <div className="chart-title">Pie Chart</div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="chart-container">
        <div className="chart-title">Scatter Chart</div>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={dataScatter} fill="#FFC107" />
        </ScatterChart>
      </div>
    </div>
  );
};

export default Chart3;