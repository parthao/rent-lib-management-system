/* eslint-disable */
import React, { useEffect, useState } from "react";

import FireBaseSwitch from "../MacroComponent/FireBaseSwitch.tsx";
import Accordion from "../MacroComponent/Accordion.tsx";
import PropertyService from "../../Services/Property.service.tsx";
import DataGrid from "../MacroComponent/DataGrid.tsx";
//import { Property } from "../../Interface/ApplicationProps.tsx";

const columns = [
  {
    key: "name",
    title: "Name",
    render: (r) => <div>{r.roomName}</div>,
  },
  {
    key: "pinnumber",
    title: "PIN Number",
    render: (r) => <div>{r.pinNumber}</div>,
  },
  {
    key: "action",
    title: "Action",
    render: (r) => (
      <FireBaseSwitch
        Reference={r.propertyID}
        Field={r.roomName}
      ></FireBaseSwitch>
    ),
  },
];

export default function Application() {
  const [name, setName] = useState("");
  const [data, setData] = useState<Property[]>([]);

  useEffect(() => {
    PropertyService.PropertyWithRoomsList().then((response) => {
      setData(response.data as Property[]);
    });
  }, []);

  return (
    <div className="App">
      {data.map((property) => (
        <Accordion title={property.propertyName}>
          <DataGrid
            columns={columns}
            data={property.rooms.map((r) => r)}
            RowsPerPage={5}
            onRowClick={""}
          />
        </Accordion>
      ))}
    </div>
  );
}
