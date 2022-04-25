import "./FeaturedStats.css";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { Component } from "react";

export default class FeaturedStats extends Component {
    constructor() {
        super();
        this.state = {
            percentage: "54%"
        };
    }

    render() {
        return (
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Reported Cases</span>
                    <div className="featuredBoxContainer">
                        <span className="featuredNum">4,741</span>
                        <span className="featuredRate">
                            {this.state.percentage} <ArrowDropUp />
                        </span>
                        <span className="featuredPrevious">3,074</span>
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
