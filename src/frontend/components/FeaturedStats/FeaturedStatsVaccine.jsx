import "./FeaturedStats.css";
import { Component } from "react";
import axios from "axios";

const DataFormatter = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(2).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(2).toString() + "M";
  } else {
    return number.toString();
  }
};

export default class FeaturedStatsVaccine extends Component {
  constructor() {
    super();
    this.state = {
      vaccineData: [],
      finishedLoading: false,
    };
  }

  async componentDidMount() {
    await axios
      .get("/api/vaccine")
      .then((res) => {
        const data = res.data;
        this.setState({ vaccineData: data, finishedLoading: true }, () => {
          console.log(this.state.vaccineData);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const { vaccineData, finishedLoading } = this.state;
    if (!finishedLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Reported Vaccinations</span>
          <div className="featuredBoxContainer">
            <span className="featuredNum">{DataFormatter(vaccineData[0].totaltwo)}</span>
            <span className="featuredPrevious">
            { ((vaccineData[0].totaltwo / vaccineData[0].totalpopulation) * 100).toFixed(2) } %
            </span>
          </div>
          {/* <span className="featuredSubtitle">Updated: {vaccineData[0].date}</span> */}
          <span className="featuredSubPrev2">Percent of NC Residents Vaccinated</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Reported Booster Vaccines</span>
          <div className="featuredBoxContainer">
            <span className="featuredNum">{DataFormatter(vaccineData[0].totalboost)}</span>
            <span className="featuredPrevious">
            { ((vaccineData[0].totalboost / vaccineData[0].totalpopulation) * 100).toFixed(2) } %
            </span>
          </div>
          {/* <span className="featuredSubtitle">Updated: {vaccineData[0].date}</span> */}
          <span className="featuredSubPrev2">Percent of NC Residents with Booster</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">
            Current Population of NC
          </span>
          <div className="featuredBoxContainer">
            <span className="featuredNumMillion">
              { DataFormatter(vaccineData[0].totalpopulation) }
            </span>
            <span className="featuredPreviousDesc">
                In 100 Counties
            </span>
          </div>
        </div>
      </div>
    );
  }
}
