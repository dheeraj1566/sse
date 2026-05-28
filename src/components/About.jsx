import { useState, useEffect, useRef } from "react";

// DESIGN TOKENS
const T = {
  cream:    "#FDF6EE",
  parchment:"#F5EAD8",
  warmWhite:"#FFFBF5",
  charcoal: "#2C1F0E",
  ink:      "#4A3520",
  muted:    "#8C7355",
  hairline:  "#E8D8BF",
  saffron:  "#E07B2A",
  saffronL: "#F5A050",
  gold:     "#C9921A",
  goldL:    "#F0C060",
  terracotta:"#C4553A",
  sage:     "#7A9E7E",
  navBg:    "rgba(44,31,14,0.96)",
};

function useScrollVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, style = {}, ...rest }) {
  const [ref, visible] = useScrollVisible();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      ...style,
    }} {...rest}>{children}</div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14,
    }}>
      <span style={{ display: "block", width: 28, height: 2, background: T.saffron, borderRadius: 2 }} />
      <span style={{ color: T.saffron, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: T.cream, padding: "90px 5%" }}>
      <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        {/* Story card */}
        <Fade>
          <div style={{
            background: `linear-gradient(145deg, #2C1A08, #3E2510)`,
            borderRadius: 24, padding: "44px 40px", position: "relative", overflow: "hidden",
          }}>
            {/* Decorative arch */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(224,123,42,0.12)" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 140, height: 140, borderRadius: "50%", background: "rgba(201,146,26,0.08)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 44, marginBottom: 18 }}>🏡</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#F5E8D0", marginBottom: 14, fontFamily: "Georgia, serif", lineHeight: 1.3 }}>
                A family business<br />built on trust
              </h3>
              <p style={{ color: "#9E7D58", lineHeight: 1.8, fontSize: 14.5 }}>
                Shree Shyam Enterprises started over a decade ago with one simple idea — every household deserves appliance repairs they can actually trust, at prices that feel fair.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 30 }}>
                {[["10+","Years experience"], ["500+","Repairs done"], ["5 ★","Avg rating"], ["15+","Areas served"]].map(([n, l]) => (
                  <div key={l} style={{ background: "rgba(253,246,238,0.06)", borderRadius: 12, padding: "16px 14px", border: "1px solid rgba(220,192,154,0.1)" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: T.saffronL, fontFamily: "Georgia, serif" }}>{n}</div>
                    <div style={{ fontSize: 11, color: "#7A6245", marginTop: 4, letterSpacing: 0.3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* Text */}
        <Fade delay={140}>
          <SectionLabel>About Us</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 38px)", fontWeight: 800, color: T.charcoal, lineHeight: 1.25, marginBottom: 18, fontFamily: "Georgia, serif" }}>
            Jaipur's most trusted kitchen appliance experts
          </h2>
          <p style={{ color: T.ink, lineHeight: 1.85, fontSize: 15.5, marginBottom: 20 }}>
            We understand how important the kitchen is to your home. When an appliance breaks down, it disrupts your whole day. That's why our technicians arrive prepared, work efficiently, and leave your kitchen cleaner than they found it.
          </p>
          <p style={{ color: T.muted, lineHeight: 1.85, fontSize: 15, marginBottom: 32 }}>
            Every repair uses genuine OEM parts. Every quote is honest. Every technician is trained specifically on the brands we service — Faber, Elica, Glen, Hafele and Kenstar.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {[
              "Brand-certified technicians for all five supported brands",
              "Transparent pricing — you approve the quote before we start",
              "Genuine spare parts, sourced and verified",
              "We stand behind every repair we do",
            ].map(item => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: T.sage, fontSize: 17, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ color: T.ink, fontSize: 15, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}

