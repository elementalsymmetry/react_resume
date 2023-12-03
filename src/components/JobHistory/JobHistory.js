// JobHistory.js
import React from 'react';
import Header from '../Header/Header.js';
import './JobHistory.css'; // Assuming you will have a separate CSS for this component

const Job = ({ job }) => {
    return (
        <div className="job">
            <h3><b>{job.position}</b> - {job.company} - <em>{job.location}</em></h3>
            <p></p>
            <p>{job.startDate} - {job.endDate}</p>
            <ul>
                {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

const JobHistory = ({ jobHistory }) => {
    return (
        <div className="job-history">
            <Header title="Employment History" />
            {jobHistory.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </div>
    );
};

export default JobHistory;
