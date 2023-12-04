// Profile.js
import React from 'react';
import './Profile.css';
import Header from '../Header/Header.js';

const Profile = ({ profile }) => {
    return (
        <div className="profile relative">
            <div className="profile-text">
                <h1 className="uppercase text-5xl font-bold mb-5 text-gray-800">{profile.name}</h1>
                <h2 className="text-3xl mb-5 text-gray-600 font-normal">{profile.title}</h2>
                <Header title="Profile" />
                <div className="text-1xl">{profile.summary}</div>
            </div>
            <div className="profile-photo absolute right-0 top-50">
                <img src="/react_resume/images/me.jpg" alt="Your Name" className="rounded-full object-cover w-14 h-24" />
            </div>
        </div>
    );
};

export default Profile;
