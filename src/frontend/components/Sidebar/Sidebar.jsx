import "./Sidebar.css";
import {
  Home,
  Equalizer,
  Newspaper,
  List,
  /*ChatBubble,*/ Map,
  Coronavirus,
  Healing,
  Person,
  Login,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();

  return (
    <div className="Sidebar">
      <div className="SidebarWrapper">
        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Dashboard</h3>
          <ul className="SidebarList">
            <li
              onClick={() => {
                navigate("/app");
              }}
              className="SidebarListItem"
            >
              <Home className="SidebarIcon" />
              Overview
            </li>
            <li
              onClick={() => {
                navigate("/vaccine");
              }}
              className="SidebarListItem"
            >
              <Equalizer className="SidebarIcon" />
              Vaccine Statistics
            </li>
            <li
              onClick={() => {
                navigate("/outbreaks");
              }}
              className="SidebarListItem"
            >
              <Coronavirus className="SidebarIcon" />
              Outbreaks
            </li>
          </ul>
        </div>

        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Public Resources</h3>
          <ul className="SidebarList">
            <li
              onClick={() => {
                navigate("/news");
              }}
              className="SidebarListItem"
            >
              <Newspaper className="SidebarIcon" />
              News
            </li>
            <li
              onClick={() => {
                navigate("/FAQ");
              }}
              className="SidebarListItem"
            >
              <List className="SidebarIcon" />
              FAQ
            </li>
            {/*<li className="SidebarListItem">
                        <Map className="SidebarIcon"/>
                        Testing Sites
                    </li>*/}
            <li
              onClick={() => {
                navigate("/symptoms");
              }}
              className="SidebarListItem"
            >
              <Healing className="SidebarIcon" />
              Symptoms
            </li>
          </ul>
        </div>

        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Account Information</h3>
          <ul className="SidebarList">
            <li
              onClick={() => {
                navigate("/login");
              }}
              className="SidebarListItem"
            >
              <Login className="SidebarIcon" />
              Login
            </li>
            <li
              onClick={() => {
                navigate("/account-login");
              }}
              className="SidebarListItem"
            >
              <Home className="SidebarIcon" />
              My Account
            </li>
            <li
              onClick={() => {
                navigate("/county");
              }}
              className="SidebarListItem"
            >
              <Map className="SidebarIcon" />
              My County
            </li>
            <li
              onClick={() => {
                navigate("/user");
              }}
              className="SidebarListItem"
            >
              <Person className="SidebarIcon" />
              Users
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
