import React, { PureComponent } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DataFormatter = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(2).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(2).toString() + "M";
  } else {
    return number.toLocaleString('en-US');
  }
};

const DataFormatterYAxis = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(0).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(0).toString() + "M";
  } else {
    return number.toLocaleString('en-US');
  }
};

export default class WasteChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      finishedLoading: false,
    };
  }

  async componentDidMount() {
    await axios
      .get("/api/wastewater-total")
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
    return (
      <ResponsiveContainer width="100%" aspect={3.4 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 12,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{
              value: "Date",
              position: "bottom",
              offset: 0,
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "bold",
            }}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            dataKey="date"
          />
          <YAxis
            label={{
              value: "Cases",
              angle: -90,
              position: "insideLeft",
              offset: -5,
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "bold",
            }}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            tickFormatter={DataFormatterYAxis}
          />
          <Tooltip formatter={DataFormatter}/>
          <Bar name = "Particles" dataKey="particles" fill="#34046c" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
