import { PureComponent } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./Chart.css";
import axios from "axios";


export default class OutbreakTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          finishedLoading: false,
        };
    }
    
    async componentDidMount() {
        await axios
          .get("/api/outbreaks")
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
            { field: 'county', headerName: 'County', width: '250' },
            { field: 'nursinghome', headerName: 'Nursing Home', width: '250' },
            { field: 'carefacility', headerName: 'Residential Care Facility', width: '300'},
            { field: 'correctionalfacility', headerName: 'Correctional Facility', width: '300' },
            { field: 'other', headerName: 'Other', width: '200' }
        ]
        return (
            <div className="chartContainer">
                <div className="vaccineChart">
                    <div className="vaccineGridStyle"><DataGrid density='compact' rows={data} columns={columns} pageSize={5} disableSelectionOnClick/></div> 
                </div>
            </div>
        );
    }
}