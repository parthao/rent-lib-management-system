import React from 'react'
import DataGrid from '../MacroComponent/DataGrid.tsx';

const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'address', title: 'Address' },
  ];

  const data = [
    { id: 1, name: 'John Doe', age: 35, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 42, address: '456 Elm St' },
    { id: 3, name: 'Sam Green', age: 28, address: '789 Oak St' },
    { id: 4, name: 'Alice Brown', age: 30, address: '321 Pine St' },
    { id: 5, name: 'Bob White', age: 25, address: '654 Maple St' },
    { id: 6, name: 'Charlie Black', age: 40, address: '987 Cedar St' },
  ];

export default function User() {
  return (
        <div>
      <h1>My Data Grid</h1>
      <DataGrid columns={columns} data={data} RowsPerPage={10}/>
    </div>
  );
 
}
