import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import './inv.css'

const data = [
  { name: 'Total Products', value: 12 },
  { name: 'Low Stock Products', value: 2 },
  { name: 'Out of Stock Products', value: 1 },
  { name: 'Zero Stock Product', value: 5 },
];

const purchaseData = [
  { date: '2017-01-11', referenceNo: 'P000195', vendorName: 'Mike', orderSubtotal: 1500, otherChargesTotal: 10, orderTotal: 1510 },
  { date: '2017-01-09', referenceNo: 'P00020S', vendorName: 'John', orderSubtotal: 200, otherChargesTotal: 20, orderTotal: 220 },
  { date: '2017-01-04', referenceNo: 'P00015S', vendorName: 'Emma', orderSubtotal: 1000, otherChargesTotal: 20, orderTotal: 1020 },
  { date: '2017-01-01', referenceNo: 'P00016S', vendorName: 'Noel', orderSubtotal: 2500, otherChargesTotal: 10, orderTotal: 2510 },
  { date: '2016-12-29', referenceNo: 'P000175', vendorName: 'Ruby', orderSubtotal: 100, otherChargesTotal: 10, orderTotal: 110 },
];

const top5PurchaseData = [
  { sku: '509-GRPH', productName: 'Kaplan Melton Coat Navy', category: 'Jackets', qty: 50, price: 50, total: 2500 },
  { sku: '307-CARB', productName: 'Patch Rugger LS Shirt Taupe', category: 'Shirts', qty: 10, price: 100, total: 1000 },
  { sku: '409-CARB', productName: 'Waffle Hood Knit Olive', category: 'Jackets', qty: 15, price: 20, total: 300 },
  { sku: '489-RTLC', productName: 'Red Textured Leather Cardholder', category: 'Card Holder', qty: 20, price: 10, total: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function InventoryDashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory ? top5PurchaseData.filter((item) => item.category === selectedCategory) : top5PurchaseData;

  return (
    <div>
    <h1 className='ui'>Summary</h1>
    <div className="container1">
  
         <div >
      
        <div className="summary-cards1">
          {data.map((item, index) => (
            <div key={index} className="summary-card1">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </div>
              <div className="content">
                <p>{item.name}</p>
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="purchase-invoice">
        <h2>Recent Purchase Invoice</h2>
        <table>
          <thead>
            <tr>
              <th>Purchase Date</th>
              <th>Reference No.</th>
              <th>Vendor Name</th>
              <th>Order Subtotal</th>
              <th>Other Charges Total</th>
              <th>Order Total</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.referenceNo}</td>
                <td>{item.vendorName}</td>
                <td>{item.orderSubtotal}</td>
                <td>{item.otherChargesTotal}</td>
                <td>{item.orderTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="top-5-purchase-product">
        <h2>Top 5 Purchase Product</h2>
        <div className="category-filter">
          <button onClick={() => handleCategoryClick(null)}>All Categories</button>
          {Array.from(new Set(top5PurchaseData.map((item) => item.category))).map((category) => (
            <button key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.sku}</td>
                <td>{item.productName}</td>
                <td>{item.category}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="charts">
        <div className="pie-chart">
          <h3>Product Stock Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                                {
                  data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-chart">
          <h3>Purchase Order Total</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={purchaseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Bar dataKey="orderTotal" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InventoryDashboard;