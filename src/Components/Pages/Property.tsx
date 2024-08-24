import React, { useEffect, useState } from "react";
import DataGrid from "../MacroComponent/DataGrid.tsx";
import Propertys from "../../Services/Property.service.tsx";

const columns = [
  { key: "propertyName", title: "Name" },
  { key: "address", title: "Address" },
  { key: "description", title: "Description" },
  { key: "rentAmount", title: "Rent Amount" },
  { key: "action", title: "Action" },
];

export default function Property() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Propertys.PropertyList().then((data) => {
      setData(data.data);
    });
  }, []);
  return (
    <div>
      <h1>My Data Grid</h1>
      <DataGrid columns={columns} data={data} RowsPerPage={5} onRowClick={""} />
    </div>
  );
}
