import React, {  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TierList from './components/TierList';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

const App = () => {return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<TierList />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;