import React from 'react';
import './Manufacturing.css';

const tableData = [
  {
    tableName: 'Products',
    columns: [
      { name: 'ProductID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'ProductName', type: 'VARCHAR(255)', description: 'Product name (not null)' },
      { name: 'ProductDescription', type: 'TEXT', description: 'Product description' },
      { name: 'UnitPrice', type: 'DECIMAL(10, 2)', description: 'Unit price' },
    ],
  },
  {
    tableName: 'BOM (Bill of Materials)',
    columns: [
      { name: 'BOMID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'ProductID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'ComponentID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'QuantityRequired', type: 'INT', description: 'Quantity required' },
    ],
  },
  {
    tableName: 'WorkOrders',
    columns: [
      { name: 'WorkOrderID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'ProductID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'Quantity', type: 'INT', description: 'Quantity' },
      { name: 'StartDate', type: 'DATE', description: 'Start date' },
      { name: 'EndDate', type: 'DATE', description: 'End date' },
      { name: 'Status', type: 'VARCHAR(50)', description: 'Order status' },
    ],
  },
];

const Manufacturing = () => {
  return (
    <div className="manufacturing">
      <h2>Manufacturing Tables</h2>
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

export default Manufacturing;
