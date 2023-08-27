import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <Link to="/">VPN Tier List</Link>
      </div>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <div className="header-dropdown">
          Socials
          <div className="header-dropdown-content">
            <a href="https://www.youtube.com/channel/UCXJWKuGh0qedrYviGEJmlWw" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://discord.gg/mPmJHAysxA" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a href="https://twitter.com/TomSparkReviews" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.reddit.com/r/vpncomparison/" target="_blank" rel="noopener noreferrer">
              Reddit
            </a>
          </div>
        </div>
        <div className="header-dropdown">
          Quizzes
          <div className="header-dropdown-content">
            <Link to="/quiz-anonymous">Are you anonymous quiz?</Link>
            <Link to="/quiz-vpn">VPN quiz?</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
