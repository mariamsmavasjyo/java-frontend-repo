// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Register</h1>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
