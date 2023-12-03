// Header.js
import React from 'react';
import './Header.css'; // Assuming you will have a separate CSS file for styling

const Header = ({ title }) => {
    return <h2 className="section-header">{title}</h2>;
};

export default Header;
