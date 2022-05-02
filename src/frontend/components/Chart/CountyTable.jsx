import { useEffect, useState } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import sty from "../../pages/login.module.css";

function CountyTable() {

    const [counties, setCounties] = useState([]);

    useEffect(() => {
        const getData = async () => {
          const result = await axios(
            '/app/getCountyData',
          );

          console.log(result.data);
     
          setCounties(result.data);
        };

        getData();

    }, []);

    return (
        <div className={sty.tableBox}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>County</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Daily Cases</TableCell>
                            <TableCell align="right">Deaths</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {counties.map((row) => (
                            <TableRow
                                key={row.county}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.county}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.dailycases}</TableCell>
                                <TableCell align="right">{row.deaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CountyTable;