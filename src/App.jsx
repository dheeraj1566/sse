

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { useState, useEffect } from 'react';
import logo from './assets/logo.png';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  if (loading) return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: `linear-gradient(145deg, #1E1008, #2C1A08)`,
    }}>
      <div style={{
        width: 300, height: 150, borderRadius: 18,
        background: `linear-gradient(145deg, #E07B2A, #d79608)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 22,
        animation: "loadSpin 1.1s ease-in-out infinite alternate",
        overflow: 'hidden',
      }}>
        <img src={logo} alt="Shree Shyam Logo" style={{ width: 380 }} />
      </div>
      <div style={{ color: "#5A4030", fontSize: 14, letterSpacing: 0.5 }}>Loading Shree Shyam Enterprises…</div>
      <style>{`@keyframes loadSpin{from{transform:scale(0.9);opacity:0.7}to{transform:scale(1.05);opacity:1}}`}</style>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: '#FDF6EE' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}
