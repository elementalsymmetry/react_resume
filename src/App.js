import React from 'react';
import './App.css';
import resumeData from './assets/resume_data.json'; // Adjust the path as necessary
import Skills from './components/Skills/Skills.js';
import JobHistory from './components/JobHistory/JobHistory.js';

const App = () => {
  return(  
      <div className="flex-center">
          <div className="resume-container">
              <div className="main-content">
                  <div className="section-separator"></div>
                  <JobHistory jobHistory={resumeData.jobHistory} />
                  <div className="section-separator"></div>
                  <Skills skills={resumeData.skills} />
              </div>
          </div>
      </div>
  );
};

export default App;
