import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TierList from './components/TierList';
import About from './components/About';
import './App.css';

const App = () => {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<TierList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
