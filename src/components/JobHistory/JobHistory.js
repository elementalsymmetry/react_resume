// JobHistory.js
import React from 'react';
import Header from '../Header/Header.js';
import './JobHistory.css'; // Assuming you will have a separate CSS for this component

const Job = ({ job }) => {
    const renderResponsibility = (responsibility) => {
        if (Array.isArray(responsibility)) {
            // Render array items as sub-bullets
            return (
                <ul className="list-inside ">
                    {responsibility.map((item, idx) => (
                        <li key={idx} className="list-arrow">{item}</li>
                    ))}
                </ul>
            );
        }
        // Render as a regular list item if not an array
        return <li className="list-disc list-inside ">{responsibility}</li>;
    };

    return (
        <div className="job mb-4">
            <h3 className="font-bold">{job.position} - {job.company} - <em>{job.location}</em></h3>
            <p className="my-1">{job.startDate} - {job.endDate}</p>
            <ul>
                {job.responsibilities.map((responsibility, index) => (
                    <React.Fragment key={index}>
                        {renderResponsibility(responsibility)}
                    </React.Fragment>
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
