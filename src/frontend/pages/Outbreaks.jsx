import "./Home.css"
import "../components/Chart/Chart.css"
import Image from "../../backend/data/Outbreaks.png"
import OutbreakTable from "../components/Chart/OutbreakTable"

export default function Outbreaks() {
  return (
    <div className='home'>
      <div className="caseChart">
        <h2 className="caseTitle">Outbreak Map by County</h2>
        <img src={Image} width="100%" alt="Outbreak Map by County"></img>
      </div>
      <OutbreakTable />
    </div>
  )
}
