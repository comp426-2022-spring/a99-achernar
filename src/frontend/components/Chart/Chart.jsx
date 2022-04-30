import "./Chart.css";
import CaseChart from "./CaseChart";
import HospitalChart from "./HospitalChart";
import WasteChart from "./WasteChart";

export default function Chart() {
    return (
        <div className="chartContainer">
            <div className="caseChart">
                <h2 className="caseTitle">Daily Reported Cases in NC</h2>
                {<CaseChart />}
            </div>

            <div className="sideCharts">
                <div className="hospitalChart">
                    <h3 className="hospitalTitle">
                        Daily Hospital Visits in NC
                    </h3>
                    {<HospitalChart />}
                </div>

                <div className="wasteChart">
                    <h3 className="wasteTitle">
                        Number of Particles in NC Wastewater
                    </h3>
                    {<WasteChart />}
                </div>
            </div>
        </div>
    );
}
