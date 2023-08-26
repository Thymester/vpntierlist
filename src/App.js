import React from 'react';
import './App.css';
import Header from './components/Header';
import TierList from './components/TierList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <TierList />
      <Footer />
    </div>
  );
}

export default App;
