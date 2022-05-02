import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/topBar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login";
import User from "./pages/Users";
import Vaccine from "./pages/Vaccine";
import Outbreaks from "./pages/Outbreaks";
import News from "./pages/News"
import County from "./pages/County";
import FAQ from "./pages/FAQ";
import Symptoms from "./pages/Symptoms"
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/app" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/county" element={<County />} />
          <Route path="/user" element={<User />} />
          <Route path="/vaccine" element={<Vaccine />} />
          <Route path="/outbreaks" element={<Outbreaks />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/account-login" element={<Login />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/app" element={<Navigate replace to="/app" />} />
          <Route path="*" element={<Navigate replace to="/app" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
