import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg-gradient"></div>
      <div className="hero-container">
        <h1 className="hero-title">
          Carlos <span className="text-gradient">García</span>
        </h1>
        <p className="hero-subtitle">
          Crafting high-performance digital experiences
        </p>
        <button className="hero-button">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
