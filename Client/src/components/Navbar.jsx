
import { T } from "./tokens";
import BtnPrimary from "./BtnPrimary";
import { useEffect, useState } from "react";
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: "none", border: "none",
      color: hov ? T.goldL : "#C9B49A",
      fontSize: 14, fontWeight: 500, cursor: "pointer",
      padding: "4px 0", transition: "color 0.2s",
      borderBottom: hov ? `1.5px solid ${T.goldL}` : "1.5px solid transparent",
    }}>{children}</button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (href) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav style={{
      position: "fixed", inset: "0 0 auto 0", zIndex: 1000,
      background: scrolled ? T.navBg : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid rgba(224,123,42,0.18)` : "none",
      transition: "background 0.4s, border 0.4s",
      padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <div onClick={() => go("#hero")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 11 }}>
          <img src={logo} alt="Shree Shyam Logo" style={{  width:250 }} />
          <div>
            {/* <div style={{ color: "#fff", fontSize: 15, fontWeight: 700, lineHeight: 1.15 }}>Shree Shyam</div>
            <div style={{ color: T.goldL, fontSize: 10, letterSpacing: 2, fontWeight: 600 }}>ENTERPRISES</div> */}
          </div>
        </div>

        {/* Desktop links */}
        <div className="sse-desk-nav" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <NavLink key={l.href} onClick={() => go(l.href)}>{l.label}</NavLink>
          ))}
          <BtnPrimary onClick={() => go("#contact")} style={{ padding: "9px 22px", fontSize: 13 }}>Book Service</BtnPrimary>
        </div>

        {/* Hamburger */}
        <button className="sse-burger" onClick={() => setOpen(o => !o)} style={{
          display: "none", background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer",
        }}>☰</button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: T.navBg, padding: "12px 5% 24px",
          display: "flex", flexDirection: "column", gap: 4,
          borderTop: `1px solid rgba(224,123,42,0.15)`,
        }}>
          {NAV_LINKS.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{
              background: "none", border: "none", color: "#D4B896", fontSize: 16, fontWeight: 500,
              padding: "11px 0", textAlign: "left", cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{l.label}</button>
          ))}
          <BtnPrimary onClick={() => go("#contact")} style={{ marginTop: 12 }}>Book Service</BtnPrimary>
        </div>
      )}

      <style>{`
        @media(max-width:860px){ .sse-desk-nav{display:none !important;} .sse-burger{display:block !important;} }
      `}</style>
    </nav>
  );
}
