import "./FeaturedStats.css";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { Component } from "react";
import axios from "axios";

export default class FeaturedStats extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            finishedLoading: false
        };
    }

    async componentDidMount() {
        await axios.get("/api/state")
        .then(res => {
            const data = res.data;
            this.setState({data: data, finishedLoading: true}, () => {
                console.log(this.state.data);
            });
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    render() {
        const {data, finishedLoading} = this.state;
        if (!finishedLoading) {
            return <div >
                <h1>Loading...</h1>
            </div>
        }
        return (
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Reported Cases</span>
                    <div className="featuredBoxContainer">
                        <span className="featuredNum" key="data[0].id">
                            {data[0].positive}
                        </span>
                        <span className="featuredRate">
                            {Math.floor((data[1].positive / data[0].positive - 1) * 100)}%
                            {data[0].positive > data[1].positive ? <ArrowDropUp/> : <ArrowDropDown/>}
                        </span>
                        <span className="featuredPrevious" key="data[1].id">
                            {data[1].positive}
                        </span>
                    </div>
                    <span className="featuredSubtitle">Updated weekly</span>
                    <span className="featuredSubPrev">Previous Week</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Hospital Visits</span>
                    <div className="featuredBoxContainer">
                        <span className="featuredNum">242</span>
                        <span className="featuredRate">
                            13% <ArrowDropDown />
                        </span>
                        <span className="featuredPreviousVisits">274</span>
                    </div>
                    <span className="featuredSubtitle">Updated weekly</span>
                    <span className="featuredSubPrev">Previous week</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">
                        COVID-19 Particles in Wastewater
                    </span>
                    <div className="featuredBoxContainer">
                        <span className="featuredNum">2.1 Million</span>
                        <span className="featuredRate">
                            50% <ArrowDropUp />
                        </span>
                        <span className="featuredPreviousMillion">
                            1.4 Million
                        </span>
                    </div>
                    <span className="featuredSubtitle">Updated weekly</span>
                    <span className="featuredSubPrev">Previous week</span>
                </div>
            </div>
        );
    }
}
