import React from "react";
import "./App.css";
import resumeData from "./assets/resume_data.json"; // Adjust the path as necessary
import Skills from "./components/Skills/Skills.js";
import JobHistory from "./components/JobHistory/JobHistory.js";
import Profile from "./components/Profile/Profile.js";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails.js";

const App = () => {
  return (
    <div className="resume-container">
      <div className="left-column">
        <Profile profile={resumeData.profile} />
        <div className="section-separator" />
        <JobHistory jobHistory={resumeData.jobHistory} />
      </div>
      <div className="right-column">
        <PersonalDetails profile={resumeData.profile} />
        <div className="section-separator" />
        <Skills skills={resumeData.skills} />
      </div>
    </div>
  );
};

export default App;
