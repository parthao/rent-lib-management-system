import React, { useEffect, useState } from "react";
import Expenses from "../../Services/Expenses.service.tsx";
import DataGrid from "../MacroComponent/DataGrid.tsx";
import { render } from "@testing-library/react";

const columns = [
  {
    key: "propertyName",
    title: "Property Name",
    render: (row) => <span>{row.property.propertyName}</span>,
  },
  { key: "billType", title: "Bill Type" },
  { key: "actuaIID", title: "Bill ID" },
  { key: "amount", title: "Amount" },
  {
    key: "generatedDate",
    title: "Generated",
    render: (row) => {
      const date = new Date(row.generatedDate);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const year = date.getFullYear(); // Full year

      const formattedDate = `${day}/${month}/${year}`;
      return <span>{formattedDate}</span>;
    },
  },
  {
    key: "dueDate",
    title: "Due",
    render: (row) => {
      const date = new Date(row.dueDate);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const year = date.getFullYear(); // Full year

      const formattedDate = `${day}/${month}/${year}`;
      return <span>{formattedDate}</span>;
    },
  },
  {
    key: "action",
    title: "Status",
    render: (row) => {
      const date = new Date(row.paidDate);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const year = date.getFullYear(); // Full year

      var formattedDate = `${day}/${month}/${year}`;
      var status = "statustagpaid";

      if (formattedDate == "01/01/1970") {
        formattedDate = String("Not Paid");
        var status = "statustagunpaid";
      } else {
        formattedDate = String("Paid");
      }
      return <span className={status}>{formattedDate}</span>;
    },
  },
];

export default function Bill() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Expenses.ExpensesBill().then((data) => {
      setData(data.data);
    });
  }, []);
  return (
    <div>
      <h1>Bills</h1>
      <DataGrid columns={columns} data={data} RowsPerPage={5} />
    </div>
  );
}
