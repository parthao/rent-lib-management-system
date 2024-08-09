import React, { useEffect, useState } from 'react'
import DataGrid from '../MacroComponent/DataGrid.tsx';
import Users from '../../Services/User.service.tsx'

const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'phone', title: 'Phone' },
    { key: 'action', title: 'Action' },
  ];

 



export default function User() {
    const [data,setData]= useState([]);
    useEffect(() => {
        Users.UserList().then((data)=>{
            setData(data.data);
        })
      }, []);
  return (
        <div>
      <h1>My Data Grid</h1>
      <DataGrid columns={columns} data={data} RowsPerPage={5}/>
    </div>
  );
 
}
