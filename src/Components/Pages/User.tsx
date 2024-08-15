import React, { useEffect, useState } from 'react'
import DataGrid from '../MacroComponent/DataGrid.tsx';
import Users from '../../Services/User.service.tsx'

const columns = [
    { key: 'name', title: 'Name' ,render: (row) => (
        <span 
            onClick={() => alert(`Clicked on ${row.name}`)} 
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
        >
            {row.name}
        </span>
    )},
    { key: 'email', title: 'Email' },
    { key: 'phone', title: 'Phone' },
    { 
        key: 'action', 
        title: 'Action',
        render: (row) => <button onClick={() => alert(`Clicked on ${row.name}`)}>Click Me</button>
    },
];


 



export default function User() {
    const [data,setData]= useState([]);
    useEffect(() => {
        Users.UserList().then((data)=>{
            setData(data.data);
        })
      }, []);


      const handleRowClick = (row) => {
        alert(`Row clicked: ${row.name}`);
    };

  return (
        <div>
      <h1>My Data Grid</h1>
      <DataGrid columns={columns} data={data} RowsPerPage={5} onRowClick={""}/>
    </div>
  );
 
}
