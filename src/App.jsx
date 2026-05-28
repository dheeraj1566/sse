
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
        width: 64, height: 64, borderRadius: 18,
        background: `linear-gradient(145deg, #E07B2A, #C9921A)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 22,
        fontFamily: "Georgia, serif",
        animation: "loadSpin 1.1s ease-in-out infinite alternate",
      }}>श</div>
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
