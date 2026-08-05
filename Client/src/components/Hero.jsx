
import BtnPrimary from "./BtnPrimary";
import BtnOutline from "./BtnOutline";
// import logo from '../assets/logo.png';

const T = {
  saffron:  "#E07B2A",
  gold:     "#C9921A",
  goldL:    "#F0C060",
};

export default function Hero() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
      background: `linear-gradient(160deg, #1E1008 0%, #2C1A08 45%, #3A220A 75%, #251508 100%)`,
      overflow: "hidden",
    }}>
      {/* Logo above headline */}
      <div style={{ position: "absolute", left: "5%", top: 36, zIndex: 10 }}>
        {/* <img src={logo} alt="Shree Shyam Logo" style={{ width: 70, borderRadius: 12, background: "#fff", boxShadow: "0 3px 10px rgba(224,123,42,0.18)" }} /> */}
      </div>
      {/* Warm texture rings */}
      <div style={{ position: "absolute", top: "8%", right: "-8%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(224,123,42,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,146,26,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, #C9921A 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />
      {/* Diagonal warm stripe */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "42%", height: "100%", pointerEvents: "none",
        background: "linear-gradient(160deg, rgba(224,123,42,0.07) 0%, transparent 60%)",
      }} />
 
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 5% 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 680 }}>
          {/* Live badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 30,
            background: "rgba(224,123,42,0.13)", border: `1px solid rgba(224,123,42,0.32)`,
            borderRadius: 100, padding: "7px 18px",
            animation: "heroBadge 0.8s ease both",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5BBF6A", display: "inline-block", animation: "liveDot 2.2s ease-in-out infinite" }} />
            <span style={{ color: T.goldL, fontSize: 13, fontWeight: 600, letterSpacing: 0.4 }}>Serving Jaipur families since 2013</span>
          </div>
 
          <h1 style={{
            fontSize: "clamp(34px, 5.8vw, 66px)", fontWeight: 800,
            color: "#FDF0E0", lineHeight: 1.12, marginBottom: 22, letterSpacing: -0.8,
            fontFamily: "Georgia, 'Times New Roman', serif",
            animation: "heroUp 0.9s ease 0.1s both",
          }}>
            Your Kitchen<br />
            Deserves{" "}
            <span style={{
              background: `linear-gradient(120deg, ${T.saffron}, ${T.goldL})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Expert Care</span>
          </h1>
 
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "#B89A78", lineHeight: 1.75, marginBottom: 38,
            animation: "heroUp 0.9s ease 0.22s both", maxWidth: 540,
          }}>
            Trusted repair solutions for <strong style={{ color: "#DCC09A" }}>Faber, Elica, Glen, Hafele & Kenstar</strong> appliances —
            handled by experienced technicians who treat your home with care.
          </p>
 
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "heroUp 0.9s ease 0.34s both" }}>
            <BtnPrimary onClick={() => go("#contact")}>📅 Book a Service</BtnPrimary>
            <BtnOutline href="tel:+919876543210" style={{ color: "#DCC09A", borderColor: "rgba(220,192,154,0.35)" }}>📞 Call Now</BtnOutline>
          </div>
 
          {/* Stat row */}
          <div style={{
            display: "flex", gap: 0, marginTop: 58, flexWrap: "wrap",
            animation: "heroUp 0.9s ease 0.5s both",
          }}>
            {[["500+","Happy families"], ["10+","Years of trust"], ["5 brands","Fully covered"], ["2 hrs","Avg response"]].map(([n, l], i) => (
              <div key={l} style={{
                paddingRight: 36, marginRight: 36,
                borderRight: i < 3 ? `1px solid rgba(220,192,154,0.18)` : "none",
                marginBottom: 16,
              }}>
                <div style={{ fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 800, color: T.saffronL, fontFamily: "Georgia, serif" }}>{n}</div>
                <div style={{ fontSize: 12, color: "#7A6245", fontWeight: 500, marginTop: 2, letterSpacing: 0.3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Floating side cards */}
      <div className="hero-aside" style={{
        position: "absolute", right: "5%", top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 14,
        animation: "heroRight 1s ease 0.6s both",
      }}>
        {[
          { e: "🔧", t: "Chimney Repair",    s: "Free diagnosis included" },
          { e: "⚡", t: "Same-Day Service",  s: "Available 7 days a week" },
          { e: "🤝", t: "Honest Estimates",  s: "No hidden charges" },
        ].map(c => (
          <div key={c.t} style={{
            background: "rgba(253,246,238,0.05)", border: "1px solid rgba(220,192,154,0.14)",
            borderRadius: 16, padding: "16px 22px", display: "flex", alignItems: "center", gap: 14,
            minWidth: 230, backdropFilter: "blur(10px)",
          }}>
            <span style={{ fontSize: 24 }}>{c.e}</span>
            <div>
              <div style={{ color: "#EDD9BC", fontSize: 14, fontWeight: 700 }}>{c.t}</div>
              <div style={{ color: "#7A6245", fontSize: 12, marginTop: 2 }}>{c.s}</div>
            </div>
          </div>
        ))}
      </div>
 
      <style>{`
        @keyframes heroBadge { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:none} }
        @keyframes heroUp    { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:none} }
        @keyframes heroRight { from{opacity:0;transform:translate(36px,-50%)} to{opacity:1;transform:translate(0,-50%)} }
        @keyframes liveDot   { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @media(max-width:920px){ .hero-aside{display:none!important} }
      `}</style>
    </section>
  );
}