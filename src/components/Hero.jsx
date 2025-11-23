import React from 'react';
import pp from '../assets/pp.jpg';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container animate-fade-in">
        <div style={{ marginBottom: '30px' }}>
          <img src={pp} alt="Hasan Hüseyin Yolcu" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #38bdf8', boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }} />
        </div>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Hasan Hüseyin Yolcu
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Backend Developer
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#projects" className="btn">Projelerim</a>
          <a target="_blank" href="https://wa.me/905412559404" className="btn" style={{ background: 'transparent', border: '2px solid #38bdf8', color: '#38bdf8' }}>İletişim</a>
        </div>
      </div>

      {/* Background Elements */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: '#38bdf8', filter: 'blur(100px)', opacity: '0.1', borderRadius: '50%', zIndex: '-1' }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: '#818cf8', filter: 'blur(100px)', opacity: '0.1', borderRadius: '50%', zIndex: '-1' }}></div>
    </section>
  );
};

export default Hero;
