import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/layout/Hero/Hero';
import About from './components/layout/About/About';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
