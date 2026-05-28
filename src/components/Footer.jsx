
import { T } from "./tokens";
import Fade from "./Fade";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{ background: "#160D04", padding: "60px 5% 24px", borderTop: `1px solid rgba(224,123,42,0.12)` }}>
      <Fade style={{ textAlign: "center" }}>
        <img src={logo} alt="Shree Shyam Logo" style={{ width: 54, borderRadius: 12, background: "#fff", marginBottom: 12, boxShadow: "0 3px 10px rgba(224,123,42,0.18)" }} />
        <div style={{ color: T.goldL, fontWeight: 800, fontSize: 22, fontFamily: "Georgia, serif", marginBottom: 8 }}>
          Shree Shyam Enterprise
        </div>
        <div style={{ color: "#BFAE9B", fontSize: 15, marginBottom: 18 }}>
          Jaipur's Trusted Kitchen Appliance Service
        </div>
        <div style={{ color: T.saffron, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
          <a href="tel:9876543210" style={{ color: T.saffron, textDecoration: "none" }}>📞 98765 43210</a>
          <span style={{ color: "#BFAE9B", margin: "0 10px" }}>|</span>
          <a href="mailto:info@shreeshyamenterprise.com" style={{ color: T.saffron, textDecoration: "none" }}>✉️ info@shreeshyamenterprise.com</a>
        </div>
        <div style={{ color: "#7A6245", fontSize: 13 }}>
          &copy; {new Date().getFullYear()} Shree Shyam Enterprise. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
}
