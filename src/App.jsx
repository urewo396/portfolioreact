import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const updateCursor = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-title">Portfolio</div>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
      </nav>
      <main>
        <h1>Hi, I'm Max and this is my Portfolio</h1>
        <p>I'm a student that wants to become a software developer and this site is to showcase my projects.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </main>
    </div>
  );
}

export default App;
