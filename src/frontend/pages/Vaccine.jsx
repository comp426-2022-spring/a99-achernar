import "./Home.css"
import VaccineTable from "../components/Chart/VaccineTable";
import FeaturedStatsVaccine from "../components/FeaturedStats/FeaturedStatsVaccine";

export default function Vaccine() {

  return (
    <div className="home">  
      <FeaturedStatsVaccine />
      <VaccineTable />
    </div>
  )
}
