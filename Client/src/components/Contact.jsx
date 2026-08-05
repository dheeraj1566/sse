import { T } from "./tokens";
import Fade from "./Fade";
import SectionLabel from "./SectionLabel";
import BtnPrimary from "./BtnPrimary";

export default function Contact() {
  return (
    <section id="contact" style={{ background: `linear-gradient(155deg, #2C1A08, #3A220A)`, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 style={{ fontSize: "clamp(24px, 3.2vw, 40px)", fontWeight: 800, color: "#F5E8D0", marginBottom: 14, fontFamily: "Georgia, serif" }}>Book a Service</h2>
          <p style={{ color: "#BFAE9B", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Fill out the form and our team will call you back to confirm your booking.
          </p>
        </Fade>

        <form style={{ maxWidth: 420, margin: "0 auto", background: "#fff", borderRadius: 18, padding: "32px 28px", boxShadow: "0 2px 18px rgba(44,31,14,0.08)" }}>
          <div style={{ marginBottom: 18 }}>
            <input type="text" placeholder="Your Name" required style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: `1px solid ${T.hairline}`, fontSize: 15, marginBottom: 10 }} />
            <input type="tel" placeholder="Phone Number" required style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: `1px solid ${T.hairline}`, fontSize: 15, marginBottom: 10 }} />
            <input type="text" placeholder="Location (e.g. Vaishali Nagar)" required style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: `1px solid ${T.hairline}`, fontSize: 15 }} />
          </div>
          <BtnPrimary type="submit" style={{ width: "100%" }}>Book Now</BtnPrimary>
        </form>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="tel:9876543210" style={{ color: T.saffron, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>📞 98765 43210</a>
          <span style={{ color: "#BFAE9B", margin: "0 10px" }}>|</span>
          <a href="mailto:info@shreeshyamenterprise.com" style={{ color: T.saffron, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>✉️ info@shreeshyamenterprise.com</a>
        </div>
      </div>
    </section>
  );
}
