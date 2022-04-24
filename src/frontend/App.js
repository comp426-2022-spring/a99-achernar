import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import "./App.css";
import Home from "./pages/Home";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/app/*")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
        <Topbar />
        <div className="container">
            <Sidebar />
            <Home />
        </div>
    </div>
  );
}

export default App;