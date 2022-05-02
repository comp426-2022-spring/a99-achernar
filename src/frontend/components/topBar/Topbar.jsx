import React from "react";
import "./Topbar.css";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  let navigate = useNavigate();
  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">North Carolina COVID-19 Dashboard</span>
        </div>
        <div className="topRight">
          <img
            onClick={() => {
              navigate("/account-login");
            }}
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt=""
            className="topPFP"
          />
        </div>
      </div>
    </div>
  );
}
