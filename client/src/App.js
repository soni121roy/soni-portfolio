import React from 'react';
import './App.css';
import profile from './profile.jpg';

export default function App() {
  const glass = {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '22px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
  };

  const projects = [
    { name: 'Amazon Clone', link: 'https://jovial-gelato-d7803c.netlify.app', desc: 'E-commerce with cart, search & responsive design', color: '#f59e0b', id: 'jovial-gelato-d7803c' },
    { name: 'Spotify Clone', link: 'https://resilient-biscochitos-6e9312.netlify.app', desc: 'Music Player UI with trending & playlists', color: '#1DB954', id: 'resilient-biscochitos-6e9312' },
    { name: 'Ticket Management System', link: 'https://radiant-rabanadas-2c2ca0.netlify.app', desc: 'Full-stack ticket system with auth & roles', color: '#8b5cf6', id: 'radiant-rabanadas-2c2ca0' },
    { name: 'AI Resume Builder', link: 'https://delicate-swan-2ddaf8.netlify.app', desc: 'AI Resume / Portfolio Website - Live', color: '#06b6d4', id: 'delicate-swan-2ddaf8' },
    { name: 'Snake Mania', link: 'https://shimmering-brioche-c167da.netlify.app', desc: 'Classic Snake Game with score & high score', color: '#ef4444', id: 'shimmering-brioche-c167da' },
  ];

  return (
    <div style={{ background: '#05070a', color: 'white', minHeight: '100vh', fontFamily: 'Segoe UI', position: 'relative', paddingBottom: 40 }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 500, height: 500, background: 'radial-gradient(circle, #7c3aed66, transparent)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, #06b6d466, transparent)', filter: 'blur(100px)' }} />
      </div>

      <div style={{ maxWidth: 1150, margin: 'auto', padding: '30px 20px', position: 'relative', zIndex: 1 }}>

        <div style={{ ...glass, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <img src={profile} alt="Soni Roy" style={{ width: 120, height: 120, borderRadius: 20, objectFit: 'cover', border: '2px solid #8b5cf6' }} />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 38, margin: 0, background: 'linear-gradient(90deg,#fff,#a78bfa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SONI ROY</h1>
            <p style={{ color: '#22d3ee', fontWeight: 700, margin: '6px 0' }}>Aspiring Full Stack Developer | MERN Stack | React.js</p>
            <p style={{ color: '#9ca3af', fontSize: 13 }}>Panipat, Haryana | 9817756984 | soni121roy@gmail.com<br/>linkedin.com/in/soni-roy-a3a8b727 | github.com/soniroy6683</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18, marginTop: 20 }}>
          <div style={glass}>
            <h3 style={{ color: '#a78bfa', marginTop: 0 }}>🚀 Professional Summary - IT Field</h3>
            <p style={{ color: '#d1d5db', fontSize: 13.5, lineHeight: 1.7 }}>
              Passionate <b>B.Tech CSE (Pursuing), Diploma 73.10%, 12th 92%</b> student with strong interest in <b>Full Stack Development</b>. Skilled in <b>HTML5, CSS3, JavaScript, React.js, Node.js, Python, C++, MySQL, MongoDB, Git/GitHub</b>.
              <br/><br/>
              Built 5 live projects deployed on Netlify - Amazon Clone, Spotify Clone, Ticket System, AI Resume & Snake Mania. Also built Tic Tac Toe AI (Minimax) & Angry Bird Clone (Matter.js).
              <br/><br/>
              Banking backend experience improved my <b>accuracy, analytical thinking & process discipline</b> - now applying to IT.
              <br/><br/>
              <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>Goal: Full Stack Developer / Frontend Developer / Software Engineer in IT.</span>
            </p>
          </div>
          <div style={glass}>
            <h3 style={{ color: '#22d3ee', marginTop: 0 }}>💼 Experience</h3>
            <p style={{ fontSize: 13, margin: 0 }}><b>Backend Executive - Jain M & Associates</b></p>
            <p style={{ fontSize: 11, color: '#9ca3af' }}>Jan 2026 - Jul 2026 | Loan docs & verification</p>
            <p style={{ fontSize: 13, marginTop: 12, marginBottom: 0 }}><b>Backend Executive - Star Powerz Digital</b></p>
            <p style={{ fontSize: 11, color: '#9ca3af' }}>2024-2026 | MIS reporting & backend ops</p>
            <h4 style={{ color: '#f59e0b', marginTop: 16 }}>🎓 Education</h4>
            <p style={{ fontSize: 12, color: '#a1a1aa' }}>B.Tech CSE Pursuing | Diploma 73.10%<br/>12th Science 92% | 10th 72%</p>
          </div>
        </div>

        <h2 style={{ marginTop: 28 }}>💻 My 5 Live Projects - As You Sent</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {projects.map((p, i) => (
            <div key={i} onMouseMove={e => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - r.left - r.width/2;
              const y = e.clientY - r.top - r.height/2;
              e.currentTarget.style.transform = `perspective(800px) rotateY(${x/10}deg) rotateX(${-y/10}deg)`;
            }} onMouseLeave={e => e.currentTarget.style.transform = 'perspective(800px) rotateY(0) rotateX(0)'}
              style={{ ...glass, borderTop: `3px solid ${p.color}`, transition: '0.15s' }}>
              <h4 style={{ margin: '0 0 4px 0', color: p.color, fontSize: 13 }}>{p.name}</h4>
              <p style={{ fontSize: 10, color: '#6b7280', margin: 0 }}>{p.id}</p>
              <p style={{ fontSize: 11, color: '#9ca3af', margin: '8px 0', minHeight: 28 }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ background: p.color, color: 'white', padding: '6px 12px', borderRadius: 8, fontSize: 11, textDecoration: 'none', fontWeight: 700 }}>Live Demo 🚀</a>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14, marginTop: 20 }}>
          <div style={glass}>
            <h4 style={{ color: '#f59e0b', marginTop: 0 }}>🛠️ IT Skills - Full Stack</h4>
            <p style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1.8 }}>
              Frontend: HTML5, CSS3, JavaScript, React.js, Responsive<br/>
              Backend: Node.js, Express (Learning)<br/>
              DB: MySQL, MongoDB | Lang: Python, C++<br/>
              Tools: Git, GitHub, VS Code, Netlify, MS Office<br/>
              Core: DSA, OOP, DBMS, OS, CN
            </p>
          </div>
          <div style={glass}>
            <h4 style={{ color: '#10b981', marginTop: 0 }}>💪 Strengths</h4>
            <p style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1.9 }}>
              - Full Stack (HTML/CSS/JS/React/Node)<br/>
              - Problem Solving & Logic Building<br/>
              - Clean Code & Component Architecture<br/>
              - Accuracy & Attention to Detail<br/>
              - Quick Learner & Adaptable<br/>
              - Process Discipline & Team Collaboration
            </p>
          </div>
          <div style={glass}>
            <h4 style={{ color: '#8b5cf6', marginTop: 0 }}>🎯 Interest</h4>
            <p style={{ fontSize: 12, color: '#a1a1aa', lineHeight: 1.9 }}>
              Full Stack Development (MERN)<br/>
              Frontend Development<br/>
              Software Engineering<br/>
              FinTech & Core Banking Systems
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}