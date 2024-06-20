import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import './chart2.css'

const data = [
  {
    year: "2013",
    votes: 12,
  },
  {
    year: "2014",
    votes: 19,
  },
  {
    year: "2015",
    votes: 3,
  },
  {
    year: "2016",
    votes: 5,
  },
  {
    year: "2017",
    votes: 1,
  },
];

const COLORS = ["#FF7300", "#00BCD4", "#FFD700"];

const Chart2 = () => {
  return (
    <div className="container">
      <div className="chart-container">
        <div className="chart-title">Area chart</div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="votes"
              stroke="#FF7300"
              fill="#FF7300"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-container">
        <div className="chart-title">Doughnut chart</div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="votes"
              nameKey="year"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart2;