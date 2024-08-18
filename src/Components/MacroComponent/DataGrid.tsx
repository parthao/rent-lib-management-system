import React, { useState, useEffect } from "react";
import "../../css/datagrid.css";

const DataGrid = ({ columns, data, RowsPerPage, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState({
    key: 0,
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(RowsPerPage);
  const [searchQueries, setSearchQueries] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const [showSearch, setShowSearch] = useState({});

  useEffect(() => {
    setRowsPerPage(RowsPerPage);
  }, [RowsPerPage]);

  useEffect(() => {
    let filtered = data;
    Object.keys(searchQueries).forEach((key) => {
      const query = searchQueries[key].toLowerCase();
      filtered = filtered.filter((row) =>
        row[key].toString().toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when search queries change
  }, [searchQueries, data]);

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key) {
      return [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleSearchChange = (key, value) => {
    setSearchQueries((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSearch = (key) => {
    setShowSearch((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ width: "150px", whiteSpace: "nowrap" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    onClick={() => sortData(column.key)}
                    style={{ cursor: "pointer" }}
                  >
                    {column.title}
                    {sortConfig.key === column.key &&
                      (sortConfig.direction === "ascending" ? " 🔼" : " 🔽")}
                  </div>
                  {column.key != "action" ? (
                    <button
                      onClick={() => toggleSearch(column.key)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "25px",
                        padding: "0 5px",
                        display: "inline-block",
                        transform: showSearch[column.key]
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      ☰
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                {showSearch[column.key] && (
                  <input
                    className="searchbox"
                    type="text"
                    placeholder={`Search ${column.title}`}
                    value={searchQueries[column.key] || ""}
                    onChange={(e) =>
                      handleSearchChange(column.key, e.target.value)
                    }
                    style={{
                      marginTop: "5px",
                      width: "100%",
                      borderColor: "white",
                    }}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id} onClick={() => onRowClick && onRowClick(row)}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ position: "fixed", right: 0, marginTop: 30, marginRight: 20 }}
      >
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button
          className="btn btn-primary"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataGrid;
