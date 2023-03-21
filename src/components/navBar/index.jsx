import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  // TODO step 8 : cerate  Link for pages
  return (
    <div className="nav-bar">
      <div>
        <h2>GSG Shop</h2>
      </div>
      <div className="nav-items">
        <span><Link to = "/">Home</Link></span>
        
        <span><Link to = "/about">About</Link></span>

        <span><Link to = "/profile">Profile</Link></span>
        
        <span><Link to = "/login">Login</Link></span>
      </div>
    </div>
  );
};

export default NavBar;
