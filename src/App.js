import React from "react";
import "./App.css";
import resumeData from "./assets/resume_data.json";
import Skills from "./components/Skills/Skills.js";
import JobHistory from "./components/JobHistory/JobHistory.js";
import Profile from "./components/Profile/Profile.js";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails.js";
import Education from './components/Education/Education.js';
import Training from './components/Training/Training.js';
import References from './components/References/References.js';

const App = () => {
    console.log(resumeData);
  return (
    <div className="resume-container">
      {/* Top portion */}
      <div className="top-section">
        <div className="left-column-top">
          <Profile profile={resumeData.profile} />
        </div>
        <div className="right-column-top">
          <PersonalDetails profile={resumeData.profile} />
        </div>
      </div>

      <div className="section-separator" />

      {/* Bottom portion */}
      <div className="bottom-section">
        <div className="left-column-bottom">
          <JobHistory jobHistory={resumeData.jobHistory} />
        </div>
        <div className="right-column-bottom">
          <Skills skills={resumeData.skills} />
        </div>
      </div>

      <div className="section-separator" />
      <div className="bottom-section">
            <div className="bottom-left-column">
                <Education educationData={resumeData.education} />
                <Training trainingData={resumeData.training} />
                <References />
            </div>
            <div className="bottom-right-column">
                {/* Reserved for LLC logo and banner */}
            </div>
        </div>
    </div>
  );
};

export default App;
