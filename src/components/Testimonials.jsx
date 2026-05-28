import { T } from "./tokens";
import Fade from "./Fade";
import SectionLabel from "./SectionLabel";
import Stars from "./Stars";
import { useState } from "react";

const TESTIMONIALS = [
  { name: "Rajesh Sharma",  location: "Vaishali Nagar", rating: 5, avatar: "RS",
    text: "My Faber chimney had been noisy for weeks. The technician arrived within 2 hours and it's been silent since. Very professional and genuinely affordable." },
  { name: "Priya Agarwal",  location: "Malviya Nagar", rating: 5, avatar: "PA",
    text: "Booked an Elica hob repair on a Sunday — they actually showed up! The work was neat and the pricing was fair. I've already recommended them to my neighbours." },
  { name: "Mohan Verma",    location: "C-Scheme",       rating: 5, avatar: "MV",
    text: "Hafele oven installation done perfectly. The team was courteous, worked quickly and left the kitchen spotless. Exactly the kind of service you hope for." },
  { name: "Sunita Gupta",   location: "Mansarovar",     rating: 4, avatar: "SG",
    text: "Glen chimney motor replaced within a day using a genuine part. Solid, honest work. They didn't try to oversell anything — refreshing!" },
];

function TestimonialCard({ t, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Fade delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: T.warmWhite, border: `1.5px solid ${hov ? T.saffron : T.hairline}`,
        borderRadius: 18, padding: "28px 24px", minWidth: 260, maxWidth: 340,
        boxShadow: hov ? "0 10px 36px rgba(224,123,42,0.10)" : "none",
        transition: "all 0.28s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%", background: T.saffron,
            color: "#fff", fontWeight: 800, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Georgia, serif",
          }}>{t.avatar}</div>
          <div>
            <div style={{ fontWeight: 700, color: T.charcoal, fontSize: 15 }}>{t.name}</div>
            <div style={{ color: T.muted, fontSize: 12 }}>{t.location}</div>
          </div>
        </div>
        <Stars count={t.rating} />
        <p style={{ color: T.muted, fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>{t.text}</p>
      </div>
    </Fade>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: T.parchment, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel>Customer Stories</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 800, color: T.charcoal, marginBottom: 14, fontFamily: "Georgia, serif" }}>Testimonials</h2>
          <p style={{ color: T.muted, fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Real feedback from Jaipur's happiest kitchens.
          </p>
        </Fade>

        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center" }}>
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
