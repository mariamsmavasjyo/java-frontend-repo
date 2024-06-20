import React from 'react';
import './dash.css';


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
  } from "recharts";
import Doop from './chats';
import Map from '../ExampleDashboard/maps/map';
  const data4 = [
    {
      name: "Sun",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      uv: 200,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      uv: 290,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed",
      uv: 310,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Thu",
      uv: 400,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Fri",
      uv: 100,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sat",
      uv: 300,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const lineChartData = [
    {
      time: "2am",
      grossVolume: 260,
      newCustomers: 90,
    },
    {
      time: "4am",
      grossVolume: 330,
      newCustomers: 140,
    },
    {
      time: "6am",
      grossVolume: 290,
      newCustomers: 140,
    },
    {
      time: "8am",
      grossVolume: 350,
      newCustomers: 170,
    },
    {
      time: "10am",
      grossVolume: 270,
      newCustomers: 130,
    },
    {
      time: "12am",
      grossVolume: 380,
      newCustomers: 170,
    },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
const data = [
    {
      flag: '🇺🇸',
      country: 'United States',
      revenue: '$1,671.10',
      percentage: '39%',
    },
    {
      flag: '🇵🇭',
      country: 'Philippines',
      revenue: '$1,064.75',
      percentage: '30%',
    },
    {
      flag: '🇬🇧',
      country: 'United Kingdom',
      revenue: '$1,055.98',
      percentage: '45%',
    },
    {
      flag: '🇨🇦',
      country: 'Canada',
      revenue: '$1,045.49',
      percentage: '80%',
    },
    {
      flag: '🇫🇷',
      country: 'France',
      revenue: '$2,050.93',
      percentage: '10%',
    },
  ];

 

  const data1 = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  

const Dash = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Procurement</div>
        <div className="card-body">
          <div className="card-value">$62,0076.00</div>
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 17.5V2H22V17.5H2Z" />
              <path d="M2 12.5V7H22V12.5H2Z" />
              <path d="M2 2.5V1H22V2.5H2Z" />
            </svg>
          </div>
          <div className="card-target">48% target reached</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Manufacturing</div>
        <div className="card-body">
          <div className="card-value">$1,958,104.00</div>
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2L12 22" />
              <path d="M2 12L22 12" />
            </svg>
          </div>
          <div className="card-target">55% target reached</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Inventory Management</div>
        <div className="card-body">
          <div className="card-value">$234,769.00</div>
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2L12 22" />
              <path d="M2 12L22 12" />
            </svg>
          </div>
          <div className="card-target">87% target reached</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Order Management</div>
        <div className="card-body">
          <div className="card-value">$1,200.00</div>
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 17.5V2H22V17.5H2Z" />
              <path d="M2 12.5V7H22V12.5H2Z" />
              <path d="M2 2.5V1H22V2.5H2Z" />
            </svg>
          </div>
          <div className="card-target">87% target reached</div>

          
          <div className="cons">
      <div className="heade">
        <h2>Revenue by location</h2>
        <p>Sales performance revenue based by country</p>
        <div className="filter">
          <span className="refresh">🔄</span>
          <span className="filter-dropdown">
            Last 7 days
            <span className="arrow">▾</span>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="table">
          {data.map((item) => (
            <div key={item.country} className="row">
              <div className="flag">{item.flag}</div>
              <div className="country">{item.country}</div>
              <div className="revenue">{item.revenue}</div>
              <div className="percentage">{item.percentage}</div>
            </div>
          ))}
        </div>
        <Map/>
      </div>
      
    </div>




  <Doop/>





        </div>
      </div>
    </div>
  );
};
  
export default Dash;