import Chart from "../components/Chart/Chart";
import FeaturedStats from "../components/FeaturedStats/FeaturedStats";
import "./Home.css"

export default function Home() {

  return (
    <div className="home">  
      <FeaturedStats />
      <Chart />
    </div>
  )
}
