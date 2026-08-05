import Fade from "./Fade";
import SectionLabel from "./SectionLabel";
import { useState } from "react";

const BRANDS = [
  { name: "Faber",   color: "#D9501E", bg: "#FFF0E8", letter: "F" },
  { name: "Elica",   color: "#C0392B", bg: "#FFEDED", letter: "E" },
  { name: "Glen",    color: "#1A6B9A", bg: "#E8F4FF", letter: "G" },
  { name: "Hafele",  color: "#2C2C2C", bg: "#F0F0F0", letter: "H" },
  { name: "Kenstar", color: "#2E7D32", bg: "#EAFBEA", letter: "K" },
];

function BrandCard({ b, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Fade delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: hov ? "rgba(253,246,238,0.10)" : "rgba(253,246,238,0.05)",
        border: `1px solid ${hov ? "rgba(224,123,42,0.45)" : "rgba(220,192,154,0.12)"}`,
        borderRadius: 18, padding: "32px 44px", textAlign: "center",
        minWidth: 150, cursor: "default",
        transform: hov ? "translateY(-5px)" : "none",
        transition: "all 0.28s ease",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", background: b.bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, fontWeight: 900, color: b.color, fontFamily: "Georgia, serif",
          margin: "0 auto 14px",
        }}>{b.letter}</div>
        <div style={{ color: "#EDD9BC", fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{b.name}</div>
        {/* <div style={{ color: "#6B523A", fontSize: 11, letterSpacing: 1 }}>Authorised</div> */}
      </div>
    </Fade>
  );
}

export default function Brands() {
  return (
    <section id="brands" style={{ background: `linear-gradient(155deg, #2C1A08, #3A220A, #2A1606)`, padding: "80px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 50 }}>
          <SectionLabel>Supported Brands</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 800, color: "#F5E8D0", marginBottom: 14, fontFamily: "Georgia, serif" }}>Brands We Service</h2>
          <p style={{ color: "#7A6245", fontSize: 16 }}>Trained and certified for India's leading kitchen appliance brands.</p>
        </Fade>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {BRANDS.map((b, i) => <BrandCard key={b.name} b={b} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
