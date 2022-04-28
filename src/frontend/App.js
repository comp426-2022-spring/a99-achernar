import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/topBar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login";
import React from "react";
import User from './pages/Users';

function App() {
    return (
      <div>
          <Topbar />
          <div className="container">
              <Sidebar />
              <Routes>
                  <Route exact path="/app" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="/user" element={<User />} />
              </Routes>
          </div>
      </div>
    );
}

export default App;
