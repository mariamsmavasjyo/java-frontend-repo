import React, { useState } from "react";
import "./chats.css";
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

const data = [
  { name: "Sun", uv: 100, pv: 2400, amt: 2400 },
  { name: "Mon", uv: 200, pv: 1398, amt: 2210 },
  { name: "Tue", uv: 290, pv: 9800, amt: 2290 },
  { name: "Wed", uv: 310, pv: 3908, amt: 2000 },
  { name: "Thu", uv: 400, pv: 4800, amt: 2181 },
  { name: "Fri", uv: 100, pv: 3800, amt: 2500 },
  { name: "Sat", uv: 300, pv: 4300, amt: 2100 },
];

const lineChartData = [
  { time: "2am", grossVolume: 260, newCustomers: 90 },
  { time: "4am", grossVolume: 330, newCustomers: 140 },
  { time: "6am", grossVolume: 290, newCustomers: 140 },
  { time: "8am", grossVolume: 350, newCustomers: 170 },
  { time: "10am", grossVolume: 270, newCustomers: 130 },
  { time: "12am", grossVolume: 380, newCustomers: 170 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Doop = () => {
  const [selectedTab, setSelectedTab] = useState("1W");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dws">
    <div className="containes">
      <div className="chart-container">
        <div className="chart-header">
          <h2>Revenue by location</h2>
          <p>Sales performance revenue based by country</p>
        </div>
        <div className="chart-tabs">
          <button
            className={selectedTab === "1W" ? "active" : ""}
            onClick={() => handleTabChange("1W")}
          >
            1W
          </button>
          <button
            className={selectedTab === "1M" ? "active" : ""}
            onClick={() => handleTabChange("1M")}
          >
            1M
          </button>
          <button
            className={selectedTab === "3M" ? "active" : ""}
            onClick={() => handleTabChange("3M")}
          >
            3M
          </button>
          <button
            className={selectedTab === "1Y" ? "active" : ""}
            onClick={() => handleTabChange("1Y")}
          >
            1Y
          </button>
          <button
            className={selectedTab === "ALL" ? "active" : ""}
            onClick={() => handleTabChange("ALL")}
          >
            ALL
          </button>
        </div>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="chart-container">
        <div className="chart-header">
          <h2>Impressions</h2>
          <p>Customers: 58.39k</p>
          <p>Traffic: 636,757K</p>
        </div>
        <LineChart
          width={600}
          height={300}
          data={lineChartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey="grossVolume" stroke="#8884d8" />
          <Line type="monotone" dataKey="newCustomers" stroke="#82ca9d" />
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
      <div className="chart-container">
        
      
      </div>
    </div>
    </div>
  );
};

export default Doop;
