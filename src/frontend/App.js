import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topBar/Topbar";
import "./App.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="temp">other pages in this div</div>
      </div>
    </div>
  );
}

export default App;