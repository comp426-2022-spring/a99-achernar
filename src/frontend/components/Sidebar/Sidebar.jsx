import "./Sidebar.css";
import {Home, LineStyle, Newspaper, List} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="SidebarWrapper">
            <div className="SidebarMenu">
                <h3 className="SidebarTitle">Dashboard</h3>
                <ul className="SidebarList">
                    <li className="SidebarListItem">
                        <Home/>
                        Overview
                    </li>
                    <li className="SidebarListItem">
                        <Newspaper/>
                        News
                    </li>
                    <li className="SidebarListItem">
                        <List/>
                        Symptoms
                    </li>
                    <li className="SidebarListItem">
                        <LineStyle/>
                        Testing Sites
                    </li>
                    <li className="SidebarListItem">
                        <LineStyle/>
                        This sidebar looks like trash
                    </li>
                    <li className="SidebarListItem">
                        <LineStyle/>
                        and is not completed
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
