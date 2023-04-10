import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
             <h2>GetHired</h2>
            <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="appliedjobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            </div>
            <button className='btn-apply'>Start Applying</button>
        </nav>
    );
};

export default Header;