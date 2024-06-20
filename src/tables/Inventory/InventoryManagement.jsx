import React from 'react';
import './InventoryManagement.css';

const tableData = [
  {
    tableName: 'Inventory',
    columns: [
      { name: 'InventoryID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'ProductID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'LocationID', type: 'INT', description: 'Foreign key referencing Locations(LocationID)' },
      { name: 'QuantityOnHand', type: 'INT', description: 'Quantity on hand' },
      { name: 'ReorderLevel', type: 'INT', description: 'Reorder level' },
    ],
  },
  {
    tableName: 'Locations',
    columns: [
      { name: 'LocationID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'LocationName', type: 'VARCHAR(255)', description: 'Location name' },
      { name: 'Address', type: 'VARCHAR(255)', description: 'Address' },
    ],
  },
  {
    tableName: 'InventoryTransactions',
    columns: [
      { name: 'TransactionID', type: 'INT', description: 'Auto-increment primary key' },
      { name: 'ProductID', type: 'INT', description: 'Foreign key referencing Products(ProductID)' },
      { name: 'Quantity', type: 'INT', description: 'Quantity' },
      { name: 'TransactionType', type: 'VARCHAR(50)', description: 'Transaction type' },
      { name: 'TransactionDate', type: 'DATE', description: 'Transaction date' },
    ],
  },
];

const InventoryManagement = () => {
  return (
    <div className="inventory-management">
      <h2>Inventory Management Tables</h2>
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

export default InventoryManagement;
