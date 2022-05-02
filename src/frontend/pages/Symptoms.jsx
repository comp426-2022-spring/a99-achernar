import "./Home.css";
import "../components/FeaturedStats/FeaturedStats.css";

export default function Symptoms() {
  return (
    <div className="home">
      <div className="featuredItemSymptoms">
        <span className="featuredTitleFAQ">
          What are common COVID-19 symptoms?
        </span>
        <ul className="featuredDesc">
          <li>Fever of chills</li>
          <li>Cough</li>
          <li>Shortness of breath or difficulty breathing</li>
          <li>Fatigue or body aches</li>
          <li>Headache</li>
          <li>New loss of taste or smell</li>
          <li>Sore throat</li>
          <li>Congestion or runny nose</li>
          <li>Nausea, vomiting, or diarrhea</li>
        </ul>
      </div>

      <div className="featuredItemSymptoms">
        <span className="featuredTitleFAQ">
          How long does it take symptoms to appear after being exposed to
          COVID-19?
        </span>
        <div className="featuredDesc">
          Symptoms may appear 2-14 days after exposure to the virus. If you have
          a fever, cough, or other symptoms listed above, you might have
          COVID-19.
        </div>
      </div>

      <div className="featuredItemSymptoms">
        <span className="featuredTitleFAQ">
          When should I seek emergency care if I have COVID-19?
        </span>
        <div className="featuredDesc">
          If you are showing any of these emergency warning signs, seek medical
          care immediately:
        </div>
        <ul className="featuredDesc">
          <li>Trouble breathing</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion</li>
          <li>Inability to wake or stay awake</li>
          <li>
            Pale, gray, or blue-colored skin, lips, or nail beds, depending on
            skin tone
          </li>
        </ul>
      </div>

      <div className="featuredItemSymptoms">
        <span className="featuredTitleFAQ">
          What are the similarities and differences between COVID-19 and the
          flu?
        </span>
        <ul className="featuredDesc">
          <li>
            Except for a loss of taste or smell, all of the above symptoms of
            COVID-19 are also present in those with the flu.
          </li>
          <li>
            A person with COVID-19 may experience symptoms later than if they
            had the flu. Typically, flu symptoms appear between 1 to 4 days
            after infection, and COVID-19 symptoms appear between 2 to 14 days
            after infection.
          </li>
          <li>
            While COVID-19 and the flu are thought to spread in similar ways,
            the COVID-19 virus is generally more contagious than the flu virus.
            COVID-19 can be spread quicker and more easily.
          </li>
          <li>
            Both COVID-19 and flu illness can result in severe illness and
            complications. Overall, COVID-19 seems to cause more serious
            illnesses in some people.
          </li>
          <li>
            Serious COVID-19 illness resulting in hospitalization and death can
            occur even in healthy people. Some people can go on to develop
            post-COVID conditions or multisystem inflammatory syndrome (MIS).
          </li>
        </ul>
      </div>
    </div>
  );
}
