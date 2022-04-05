import React from 'react'
import "./Topbar.css"
import {NotificationsNone, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='Topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">COVID-19 Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                    <NotificationsNone />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIcons">
                    <Settings />
                </div>
                <img src="https://i.pinimg.com/736x/00/70/16/00701602b0eac0390b3107b9e2a665e0.jpg" alt="" className="topPFP" />
            </div>
        </div>
    </div>
  )
}