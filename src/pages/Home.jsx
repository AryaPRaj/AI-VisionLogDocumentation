import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Future of Computer Vision</h1>
        <p className="hero-subtitle">Experience the power of YOLOv8 - The next generation of real-time object detection.</p>
        <button 
          className="cta-button" 
          onClick={() => navigate('/docs')}
          id="navigate-to-docs"
        >
          Explore Documentation
          <span className="button-glow"></span>
        </button>
      </div>
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </div>
  );
};

export default Home;
