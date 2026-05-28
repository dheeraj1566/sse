import React from "react";
import { T } from "./tokens";
import Fade from "./Fade";
import SectionLabel from "./SectionLabel";
import BtnPrimary from "./BtnPrimary";

const WHY_US = [
  { icon: "⚡", title: "Fast Response",      desc: "Same-day or next-day service — we respect your time." },
  { icon: "💰", title: "Fair Pricing",       desc: "Clear estimates upfront. No surprises on the invoice." },
  { icon: "👨‍🔧", title: "Skilled Hands",     desc: "Our technicians have 10+ years of hands-on experience." },
  { icon: "✅", title: "Genuine Parts",      desc: "OEM-certified spares only. Never compromise quality." },
  { icon: "🏠", title: "At Your Doorstep",  desc: "We come to you. No need to lug heavy appliances anywhere." },
  { icon: "🤝", title: "Honest Service",    desc: "We tell you what's wrong — and only fix what needs fixing." },
];

function WhyCard({ w, delay }) {
  const [hov, setHov] = React.useState(false);
  return (
    <Fade delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: T.warmWhite, border: `1.5px solid ${hov ? T.saffron : T.hairline}`,
        borderRadius: 18, padding: "26px 22px", display: "flex", alignItems: "flex-start", gap: 18,
        boxShadow: hov ? "0 10px 36px rgba(224,123,42,0.10)" : "none",
        transition: "all 0.28s ease",
      }}>
        <div style={{
          width: 50, height: 50, borderRadius: 13, flexShrink: 0,
          background: `linear-gradient(135deg, #FFF3E4, #FDEAC8)`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
          border: `1px solid ${T.hairline}`,
        }}>{w.icon}</div>
        <div>
          <h3 style={{ fontSize: 16.5, fontWeight: 700, color: T.charcoal, marginBottom: 6, fontFamily: "Georgia, serif" }}>{w.title}</h3>
          <p style={{ color: T.muted, fontSize: 14, lineHeight: 1.65 }}>{w.desc}</p>
        </div>
      </div>
    </Fade>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: T.cream, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel>Our Promise</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 800, color: T.charcoal, marginBottom: 14, fontFamily: "Georgia, serif" }}>Why Choose Us?</h2>
          <p style={{ color: T.muted, fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            We earn trust through action, not just words. Here's what we promise every customer.
          </p>
        </Fade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {WHY_US.map((w, i) => <WhyCard key={w.title} w={w} delay={i * 75} />)}
        </div>

        {/* CTA banner */}
        <Fade delay={280}>
          <div style={{
            marginTop: 54, background: `linear-gradient(145deg, #2C1A08, #3E2510)`,
            borderRadius: 22, padding: "44px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
            border: `1px solid rgba(224,123,42,0.18)`,
          }}>
            <div>
              <h3 style={{ color: "#F5E8D0", fontSize: "clamp(18px, 2.8vw, 28px)", fontWeight: 800, marginBottom: 8, fontFamily: "Georgia, serif" }}>
                Ready for a repair you can trust?
              </h3>
              <p style={{ color: "#9E7D58", fontSize: 15, lineHeight: 1.6 }}>Doorstep service. Honest pricing. Happy kitchen.</p>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <BtnPrimary onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                📅 Book Now
              </BtnPrimary>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
                background: "#25D366", color: "#fff", border: "none",
                borderRadius: 10, padding: "13px 28px", fontSize: 15,
                fontWeight: 700, cursor: "pointer", textDecoration: "none",
                display: "inline-block",
              }}>💬 WhatsApp</a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
