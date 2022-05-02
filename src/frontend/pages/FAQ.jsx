import "./Home.css";
import "../components/FeaturedStats/FeaturedStats.css";

export default function FAQ() {
  return (
    <div className="home">
      <div className="featuredItem">
        <span className="featuredTitleFAQ">What is COVID-19?</span>
        <div className="featuredDesc">
          COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people
          with COVID-19 have mild symptoms, but some people become severely ill.
          Older adults and people who have certain underlying medical conditions
          are more likely to get severely ill. Post-COVID conditions are a wide
          range of health problems people can experience four or more weeks
          after first getting COVID-19.
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitleFAQ">
          What do the colors on the Outbreak page mean?
        </span>
        <div className="featuredDesc">
          COVID-19 Community Levels are a tool to help communities decide what
          prevention steps to take based on the latest data. Levels can be low,
          medium, or high and are determined by looking at the number of
          outbreaks. People can take different steps depending on the COVID-19
          Community Level in their area.
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitleFAQ">How does COVID-19 spread?</span>
        <div className="featuredDesc">
          COVID-19 is spread in three main ways.
        </div>
        <ol className="featuredDesc">
          <li>
            Breathing in air when close to an infected person who is exhaling
            small droplets and particles that contain the virus.
          </li>
          <li>
            Having these small droplets and particles that contain virus land on
            your eyes, nose, or mouth, especially through splashes and sprays
            like a cough or sneeze.
          </li>
          <li>
            Touching your eyes, nose, or mouth with hands that have the virus on
            them.
          </li>
        </ol>
      </div>

      <div className="featuredItem">
        <span className="featuredTitleFAQ">How can I protect myself?</span>
        <ul className="featuredDesc">
          <li>Get vaccinated and stay up to date on your COVID-19 vaccines.</li>
          <li>
            Wear a mask over your nose and mouth. If available, a N95 or KN95
            respirator is recommended.
          </li>
          <li>Stay 6 feet away from others.</li>
          <li>
            Wash your hands often, cover coughs, and disinfect frequently
            touched surfaces.
          </li>
        </ul>
      </div>

      <div className="featuredItem">
        <span className="featuredTitleFAQ">
          Should I get tested for COVID-19?
        </span>
        <div className="featuredDesc">You should get tested if:</div>
        <ul className="featuredDesc">
          <li>
            You have symptoms of COVID-19. Please check the Symptoms page in the side navigation bar to learn more.
          </li>
          <li>At least 5 days have passed since you last had close contact with someone with COVID-19.</li>
          <li>
            You are going to an indoor event or gathering, or if you are traveling.
          </li>
        </ul>
      </div>

      <div className="featuredItem">
        <span className="featuredTitleFAQ">
          What should I do if I test positive for COVID-19?
        </span>
        <ul className="featuredDesc">
          <li>
            Stay home for at least 5 days and isolate from others in your home.
          </li>
          <li>Wear a mask over your nose and mouth when around others.</li>
          <li>
            Tell your healthcare provider if your symptoms get worse, or you are
            more likely to get sick due to being an older adult or having a
            underlying medical condition.
          </li>
        </ul>
      </div>
    </div>
  );
}
