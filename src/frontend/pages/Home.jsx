import FeaturedStats from "../components/FeaturedStats/FeaturedStats"
import User from './Users';
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/topBar/Topbar";
import { Routes, Route, Link } from "react-router-dom";
import "./Home.css"
// import {useState, useEffect} from "react"
// import {csv} from "d3";
// import datacsv from "../../backend/data/county.csv"

export default function Home() {
  // // eslint-disable-next-line no-unused-vars
  // const [data, setData] = useState();

  // useEffect(() => {
  //   csv(datacsv).then(data => {
  //     setData(data);
  //     console.log(data[0].County);
  //     console.log(data[0].Total_Cases);
  //   });
  // }, []);


  return (
    <div className="home">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div style={{
          flex: 4
        }}>
          <Routes>
            <Route path="/app" element={<FeaturedStats />} />
            <Route path="user" element={<User />} />
          </Routes>


        </div>
      </div>

    </div>
  )
}
