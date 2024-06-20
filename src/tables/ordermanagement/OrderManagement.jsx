import React from 'react';
import './OrderManagement.css';

const tableData = [
  {
    tableName: 'Customers',
    columns: [
      { name: 'CustomerID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'CustomerName', type: 'VARCHAR(255)', description: 'Customer name' },
      { name: 'ContactName', type: 'VARCHAR(255)', description: 'Contact name' },
      { name: 'Address', type: 'VARCHAR(255)', description: 'Address' },
      { name: 'City', type: 'VARCHAR(100)', description: 'City' },
      { name: 'PostalCode', type: 'VARCHAR(20)', description: 'Postal code' },
      { name: 'Country', type: 'VARCHAR(100)', description: 'Country' },
      { name: 'Phone', type: 'VARCHAR(50)', description: 'Phone number' },
    ],
  },
  {
    tableName: 'SalesOrders',
    columns: [
      { name: 'SalesOrderID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'CustomerID', type: 'INT', description: 'Foreign key referencing Customers(CustomerID)' },
      { name: 'OrderDate', type: 'DATE', description: 'Order date' },
      { name: 'TotalAmount', type: 'DECIMAL(10, 2)', description: 'Total amount' },
      { name: 'Status', type: 'VARCHAR(50)', description: 'Order status' },
    ],
  },
  {
    tableName: 'SalesOrderDetails',
    columns: [
      { name: 'SalesOrderDetailID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'SalesOrderID', type: 'INT', description: 'Foreign key referencing SalesOrders(SalesOrderID)' },
      { name: 'ProductID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'Quantity', type: 'INT', description: 'Quantity ordered' },
      { name: 'UnitPrice', type: 'DECIMAL(10, 2)', description: 'Unit price' },
    ],
  },
];

const OrderManagement = () => {
  return (
    <div className="order-management">
      <h2>Order Management Tables</h2>
      {tableData.map((table, index) => (
        <div key={index} className="table-container">
          <h3>{table.tableName}</h3>
          <table>
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Data Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {table.columns.map((column, colIndex) => (
                <tr key={colIndex}>
                  <td>{column.name}</td>
                  <td>{column.type}</td>
                  <td>{column.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default OrderManagement;
