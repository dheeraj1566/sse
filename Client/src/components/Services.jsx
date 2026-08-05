import React from "react";
import { T } from "./tokens";
import Fade from "./Fade";
import SectionLabel from "./SectionLabel";

const SERVICES = [
  { icon: "🔧", title: "Chimney Repair",        desc: "Motor, suction, filter & electrical faults — diagnosed and fixed the right way, the first time." },
  { icon: "🔥", title: "Hob Repair",            desc: "Burner cleaning, ignition fixes, glass replacement & thorough gas-leak safety checks." },
  { icon: "📡", title: "Microwave Repair",       desc: "Heating issues, turntable faults, control-panel glitches and door seal replacements." },
  { icon: "🛠️", title: "Appliance Installation", desc: "Neat, safe installation of chimneys, hobs & built-in ovens with full safety verification." },
  { icon: "⚙️", title: "Maintenance & Service",  desc: "Annual AMC contracts, filter deep-cleans, motor servicing & performance tune-ups." },
  { icon: "🔩", title: "Spare Parts",            desc: "Genuine OEM filters, motors, knobs and sensors sourced directly for your brand." },
];

function ServiceCard({ s, delay, onBook }) {
  const [hov, setHov] = React.useState(false);
  return (
    <Fade delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: T.warmWhite, borderRadius: 20, padding: "30px 26px",
        border: `1.5px solid ${hov ? T.saffron : T.hairline}`,
        transform: hov ? "translateY(-5px)" : "none",
        boxShadow: hov ? "0 18px 48px rgba(44,31,14,0.10)" : "0 2px 8px rgba(44,31,14,0.04)",
        transition: "all 0.28s ease",
      }}>
        <div style={{
          width: 54, height: 54, borderRadius: 14, marginBottom: 18,
          background: hov ? `linear-gradient(135deg, rgba(224,123,42,0.15), rgba(201,146,26,0.12))` : `rgba(224,123,42,0.08)`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
          transition: "background 0.28s",
        }}>{s.icon}</div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 9, fontFamily: "Georgia, serif" }}>{s.title}</h3>
        <p style={{ color: T.muted, fontSize: 14.5, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
        <button onClick={onBook} style={{
          background: "none", border: "none", color: T.saffron, fontSize: 13.5,
          fontWeight: 700, cursor: "pointer", padding: 0,
          display: "flex", alignItems: "center", gap: 5,
        }}>Book this service →</button>
      </div>
    </Fade>
  );
}

export default function Services() {
  const go = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="services" style={{ background: T.parchment, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel>What We Fix</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 800, color: T.charcoal, marginBottom: 14, fontFamily: "Georgia, serif" }}>Our Services</h2>
          <p style={{ color: T.muted, fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            End-to-end care for all your kitchen appliances — repair, install, maintain.
          </p>
        </Fade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 75} onBook={go} />
          ))}
        </div>
      </div>
    </section>
  );
}
