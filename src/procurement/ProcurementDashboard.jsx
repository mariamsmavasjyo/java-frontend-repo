

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './ProcurementDashboard.css';

const ProcurementDashboard = () => {
  const defectRateData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Defect Rate',
        data: [1.5, 2.0, 2.8, 2.5, 1.8, 1.9],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Defect Rate >= 2.5',
        data: [null, 2.0, 2.8, 2.5, null, null],
        borderColor: 'red',
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBackgroundColor: 'red',
      },
    ],
  };

  const availabilityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Supplier Availability',
        data: [91, 89, 92, 90, 95, 93],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Supplier Availability < 90%',
        data: [null, 89, null, 90, null, null],
        borderColor: 'red',
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBackgroundColor: 'red',
      },
    ],
  };

  const leadTimeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Lead Time',
        data: [10, 12, 14, 13, 15, 18],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Lead Time > 16',
        data: [null, null, null, null, null, 18],
        borderColor: 'red',
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBackgroundColor: 'red',
      },
    ],
  };

  const defectTypeData = {
    labels: ['Supplier 1', 'Supplier 2', 'Supplier 3', 'Supplier 4', 'Supplier 5', 'Supplier 6'],
    datasets: [
      {
        label: 'No Impact',
        data: [80, 56, 67, 60, 60, 47],
        backgroundColor: 'green',
      },
      {
        label: 'Impact',
        data: [15, 19, 11, 8, 21, 25],
        backgroundColor: 'orange',
      },
      {
        label: 'Rejected',
        data: [5, 25, 22, 32, 19, 28],
        backgroundColor: 'red',
      },
    ],
  };

  const deliveryTimeData = {
    labels: ['Supplier 1', 'Supplier 2', 'Supplier 3', 'Supplier 4', 'Supplier 5', 'Supplier 6'],
    datasets: [
      {
        label: 'Early',
        data: [74, 73, 47, 53, 67, 62],
        backgroundColor: 'green',
      },
      {
        label: 'On Time',
        data: [18, 13, 18, 47, 12, 28],
        backgroundColor: 'yellow',
      },
      {
        label: 'Late',
        data: [8, 14, 35, 0, 21, 10],
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="dashboard1">
      <div className="card1">
        <h2>1.9%</h2>
        <p>Defect Rate</p>
      </div>
      
      <div className="card1">
        <h2>85.3%</h2>
        <p>On-Time Supplies</p>
      </div>
      <div className="card1">
        <h2>93.5%</h2>
        <p>Supplier Availability</p>
      </div>
      <div className="card1">
        <h2>15.0</h2>
        <p>Lead Time (days)</p>
      </div>

      <div className="charts1">
        <div className="chart-container1">
          <Line data={defectRateData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
        <div className="chart-container1">
          <Line data={availabilityData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
        <div className="chart-container1">
          <Line data={leadTimeData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>

      <div className="charts1" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* <div className="chart-container1">
          <Bar data={defectTypeData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
        <div className="chart-container1">
          <Bar data={deliveryTimeData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div> */}
      </div>
    </div>
  );
};

export default ProcurementDashboard;

