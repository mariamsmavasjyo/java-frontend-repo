import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './manu.css';

const data = [
  {
    name: 'Apr 2020',
    uv: 10,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Jul 2020',
    uv: 20,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Oct 2020',
    uv: 120,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jan 2021',
    uv: 200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Apr 2021',
    uv: 10,
    pv: 4800,
    amt: 2181,
  },
];

const data2 = [
  {
    name: 'Quarter 2 2020',
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Quarter 4 2020',
    uv: 400,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Quarter 2 2021',
    uv: 20,
    pv: 9800,
    amt: 2290,
  },
];

const ManufacturingDashboard = () => {
  const [monthlyTotalWorkOrders, setMonthlyTotalWorkOrders] = useState(3);
  const [monthlyCompletedWorkOrders, setMonthlyCompletedWorkOrders] = useState(2);
  const [ongoingJobCards, setOngoingJobCards] = useState(0);
  const [monthlyQualityInspections, setMonthlyQualityInspections] = useState(0);

  useEffect(() => {
    // Fetch data from your backend or any other source
    // ...
  }, []);

  return (
    <div className="dashboard-container3">
      <div className="dashboard-header3">
        <h1>Manufacturing Dashboard</h1>
        <div className="header-actions3">
          <button>...</button>
        </div>
      </div>
      <div className="dashboard-content3">
        <div className="card3">
          <h2>Monthly Total Work Orders</h2>
          <div className="card-value3">{monthlyTotalWorkOrders}</div>
          <div className="card-change3">
            0% <span>since last week</span>
          </div>
        </div>
        <div className="card3">
          <h2>Monthly Completed Work Orders</h2>
          <div className="card-value3">{monthlyCompletedWorkOrders}</div>
          <div className="card-change3">
            0% <span>since last week</span>
          </div>
        </div>
        <div className="card3">
          <h2>Ongoing Job Cards</h2>
          <div className="card-value3">{ongoingJobCards}</div>
          <div className="card-change3">
            NaN% <span>since last week</span>
          </div>
        </div>
        <div className="card3">
          <h2>Monthly Quality Inspections</h2>
          <div className="card-value3">{monthlyQualityInspections}</div>
          <div className="card-change3">
            NaN% <span>since last week</span>
          </div>
        </div>
      </div>
      <div className="dashboard-content3">
        <div className="card3">
          <h2>Produced Quantity</h2>
          <div className="card-actions3">
            <button>...</button>
            <button>=</button>
            <button>Last Year</button>
            <button>Monthly</button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card3">
            <h2>Completed Operation</h2>
            <div className="card-actions3">
              <button>...</button>
              <button>=</button>
              <button>Last Year</button>
              <button>Monthly</button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card3">
            <h2>Monthly Quality Inspections</h2>
            <div className="card-actions3">
              <button>...</button>
              <button>=</button>
              <button>Last Year</button>
              <button>Quarterly</button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };
  
  export default ManufacturingDashboard;