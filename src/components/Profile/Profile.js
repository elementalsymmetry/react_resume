// Profile.js
import React from 'react';
import './Profile.css'; 

const Profile = ({ profile }) => {
    return (
        <div className="profile">
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
        </div>
    );
};

export default Profile;
