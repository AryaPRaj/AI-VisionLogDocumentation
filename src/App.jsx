import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import YOLODoc from './pages/YOLODoc';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<YOLODoc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
