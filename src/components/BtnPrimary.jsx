import { useState } from "react";
import { T } from "./tokens";

export default function BtnPrimary({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? T.gold : T.saffron,
      color: "#fff", border: "none", borderRadius: 10,
      padding: "13px 32px", fontSize: 15, fontWeight: 700,
      cursor: "pointer", letterSpacing: 0.3,
      transform: hov ? "translateY(-2px)" : "translateY(0)",
      boxShadow: hov ? `0 10px 28px rgba(224,123,42,0.35)` : `0 4px 14px rgba(224,123,42,0.22)`,
      transition: "all 0.22s ease",
      ...style,
    }}>{children}</button>
  );
}
