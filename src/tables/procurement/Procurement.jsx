import React from 'react';
import './Procurement.css';

const tableData = [
  {
    tableName: 'Suppliers',
    columns: [
      { name: 'SupplierID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'SupplierName', type: 'VARCHAR(255)', description: 'Supplier name (not null)' },
      { name: 'ContactName', type: 'VARCHAR(255)', description: 'Contact name' },
      { name: 'Address', type: 'VARCHAR(255)', description: 'Address' },
      { name: 'City', type: 'VARCHAR(100)', description: 'City' },
      { name: 'PostalCode', type: 'VARCHAR(20)', description: 'Postal code' },
      { name: 'Country', type: 'VARCHAR(100)', description: 'Country' },
      { name: 'Phone', type: 'VARCHAR(50)', description: 'Phone number' },
    ],
  },
  {
    tableName: 'PurchaseOrders',
    columns: [
      { name: 'PurchaseOrderID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'SupplierID', type: 'INT', description: 'Foreign key referencing Suppliers(SupplierID)' },
      { name: 'OrderDate', type: 'DATE', description: 'Order date' },
      { name: 'TotalAmount', type: 'DECIMAL(10, 2)', description: 'Total amount' },
      { name: 'Status', type: 'VARCHAR(50)', description: 'Order status' },
    ],
  },
  {
    tableName: 'PurchaseOrderDetails',
    columns: [
      { name: 'PurchaseOrderDetailID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'PurchaseOrderID', type: 'INT', description: 'Foreign key referencing PurchaseOrders(PurchaseOrderID)' },
      { name: 'ProductID', type: 'INT', description: 'Product ID' },
      { name: 'Quantity', type: 'INT', description: 'Quantity' },
      { name: 'UnitPrice', type: 'DECIMAL(10, 2)', description: 'Unit price' },
    ],
  },
];

const Procurement = () => {
  return (
    <div className="procurement">
      <h2>Procurement Tables</h2>
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

export default Procurement;
