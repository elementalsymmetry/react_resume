// PersonalDetails.js
import React from 'react';
import './PersonalDetails.css'; // Assuming you will have a separate CSS file for styling

const PersonalDetails = ({ profile }) => {
    return (
        <div className="personal-details">
            <p>{profile.email2}</p>
            <p>{profile.email1}</p>
            <div className="section-separator" />

            <p>Mobile: {profile.phone}</p>
            <p>LinkedIn: <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
            <p>GitHub: <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a></p>
            <p>Resume: <a href={`http://${profile.github}.github.io/${profile.resume}`} target="_blank" rel="noopener noreferrer">{profile.resume}</a></p>
        </div>
    );
};

export default PersonalDetails;
