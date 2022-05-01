import { PureComponent } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Chart.css";
import axios from "axios";


// const DataFormatter = (number) => {
//     if (number > 1000000000) {
//       return (number / 1000000000).toFixed(2).toString() + "B";
//     } else if (number > 1000000) {
//       return (number / 1000000).toFixed(2).toString() + "M";
//     } else {
//       return number.toLocaleString('en-US');
//     }
//   };

export default class VaccineTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          finishedLoading: false,
        };
    }
    
    async componentDidMount() {
        await axios
          .get("/api/vaccine")
          .then((res) => {
            const data = res.data;
            this.setState({ data: data, finishedLoading: true }, () => {
              console.log(this.state.data);
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
    }

    render() {
        const { data, finishedLoading } = this.state;
        if (!finishedLoading) {
            return (
                <div>
                <h1>Loading...</h1>
                </div>
            );
        }
        const columns = [
            { field: 'county', headerName: 'County', width: '300' },
            { field: 'twodoses', headerName: 'Two Doses or One J&J', width: '400' },
            { field: 'booster', headerName: 'Booster Shots', width: '300'},
            { field: 'population', headerName: 'Population', width: '300' }
        ]
        return (
            <div className="chartContainer">
                <div className="vaccineChart">
                    <h2 className="caseTitle">Vaccination Records by County</h2>
                    <div className="gridStyle"><DataGrid rows={data} columns={columns} pageSize={8}/></div> 
                </div>
            </div>
        );
    }
}
