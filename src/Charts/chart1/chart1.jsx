import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './chart.css'

const data = [
  { year: '2013', value: 10 },
  { year: '2014', value: 19 },
  { year: '2014', value: 3 },
  { year: '2015', value: 5 },
  { year: '2016', value: 2 },
  { year: '2017', value: 3 },
];

const data2 = [
  { year: '2013', value: 10 },
  { year: '2014', value: 19 },
  { year: '2015', value: 4 },
  { year: '2016', value: 2 },
  { year: '2017', value: 3 },
];

const COLORS = ['#ff7300', '#00bfff', '#ffcc00', '#00c49f', '#e8a317'];

const Chart1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="chart-container">
        <h2>Line chart</h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h2>Bar chart</h2>
        <BarChart
          width={600}
          height={300}
          data={data2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#ff7300" />
          <Bar dataKey="value" fill="#00bfff" />
          <Bar dataKey="value" fill="#ffcc00" />
          <Bar dataKey="value" fill="#00c49f" />
          <Bar dataKey="value" fill="#e8a317" />
        </BarChart>
      </div>
      <div className="chart-container">
        <h2>Pie chart</h2>
        <PieChart width={600} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="year"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                onClick={() => onPieEnter(entry, index)}
                onMouseOver={() => setActiveIndex(index)}
                onMouseOut={() => setActiveIndex(-1)}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Chart1;
