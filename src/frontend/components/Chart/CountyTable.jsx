import { useEffect, useState } from "react";
import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import sty from "../../pages/login.module.css";
import { DataGrid } from '@mui/x-data-grid';
import "./Chart.css";


function CountyTable() {
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios("/app/getCountyData");

      console.log(result.data);

      setCounties(result.data);
    };

    getData();
  }, []);

  const columns = [
    { field: "county", headerName: "County", width: "300" },
    { field: "date", headerName: "Date", width: "300" },
    { field: "dailycases", headerName: "Daily Cases", width: "300" },
    { field: "deaths", headerName: "Deaths", width: "300" },
  ];
  return (
    <div className="chartContainer">
      <div className="vaccineChart">
        <h2 className="caseTitle">Vaccination Records by County</h2>
        <div className="gridStyle2">
          <DataGrid
            rows={counties}
            columns={columns}
            pageSize={12}
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}

export default CountyTable;
