import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './ord.css'

const data = [
  { name: 'HOLD CREATE SHIP', value: 2 },
  { name: 'SHP ALL', value: 6 },
  { name: 'DOO FTL ALLSERVICES', value: 7 },
  { name: 'Hold For Change Request', value: 10 },
  { name: 'Others', value: 13 },
  { name: 'SCHLD ALL', value: 29 },
  { name: 'HOLD CREATE INVOICE', value: 24 },
  { name: 'RESRV ALL', value: 11 },
  { name: 'DOO FTL HOLD', value: 13 },
  { name: 'SCHLD', value: 14 },
];

const data2 = [
  { name: 'Fulfillment Task', value: 6 },
  { name: 'Fulfillment Process', value: 28 },
  { name: 'Process Assignment', value: 11 },
  { name: 'Processing Constraints', value: 15 },
];

const data3 = [
  { name: 'Pricing', value: 6 },
  { name: 'Order Validation', value: 15 },
  { name: 'Order Transformation', value: 20 },
  { name: 'Approvals', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const OrderDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container7">
      <div className="header7">
        <div className="logo7"></div>
        <div className="search7">
          <input type="text" placeholder="What do you need to do or find?" value={searchTerm} onChange={handleChange} />
          <button>Search</button>
        </div>
        <div className="actions7">
          <button>Advanced</button>
          <button>Tasks</button>
          <button>Create Order</button>
        </div>
      </div>

      <div className="overview7">
        <h2>Overview</h2>

        <div className="dashboard-grid7">
          <div className="card7">
            <h3>Orders on Backorder</h3>
            <div className="bar-chart7">
              <div className="bar7" style={{ height: '100px', backgroundColor: 'red' }} />
              <div className="legend7">
                <div className="item" style={{ backgroundColor: 'red' }}>Over 14 days</div>
                <div className="item" style={{ backgroundColor: 'orange' }}>8 to 14 days</div>
                <div className="item" style={{ backgroundColor: 'yellow' }}>4 to 7 days</div>
                <div className="item" style={{ backgroundColor: 'lightblue' }}>1 to 3 days</div>
              </div>
            </div>
          </div>

          <div className="card7">
            <h3>Orders Past Due</h3>
            <div className="bar-chart7">
              <div className="bar7" style={{ height: '100px', backgroundColor: 'red' }} />
              <div className="legend7">
                <div className="item" style={{ backgroundColor: 'red' }}>Over 14 days</div>
                <div className="item" style={{ backgroundColor: 'orange' }}>8 to 14 days</div>
                <div className="item" style={{ backgroundColor: 'yellow' }}>4 to 7 days</div>
                <div className="item" style={{ backgroundColor: 'lightblue' }}>1 to 3 days</div>
              </div>
            </div>
          </div>

          <div className="card7">
            <h3>Fulfillment Lines in...</h3>
            <div className="data-card7">
              <div className="item" style={{ backgroundColor: 'red' }}>267 <span>High</span></div>
              <div className="item" style={{ backgroundColor: 'orange' }}>789 <span>Medium</span></div>
              <div className="item" style={{ backgroundColor: 'yellow' }}>1.98K <span>Low</span></div>
            </div>
          </div>

          <div className="card7">
            <h3>Orders in Jeopardy</h3>
            <div className="data-card7">
              <div className="item" style={{ backgroundColor: 'red' }}>198 <span>High</span></div>
              <div className="item" style={{ backgroundColor: 'orange' }}>592 <span>Medium</span></div>
              <div className="item" style={{ backgroundColor: 'yellow' }}>1.56K <span>Low</span></div>
            </div>
          </div>

          <div className="card8">
            <h3>Orders on Hold</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart width={400} height={200}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card8">
            <h3>Orders in Error</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart width={400} height={200}>
                <Pie
                  data={data2}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                >
                  {data2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card8">
            <h3>Draft Orders in Error</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart width={400} height={200}>
                <Pie
                  data={data3}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                >
                  {data3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card7" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;