import { useState } from "react";
import { T } from "./tokens";

export default function BtnOutline({ children, onClick, href, style = {} }) {
  const [hov, setHov] = useState(false);
  const s = {
    background: hov ? "rgba(224,123,42,0.08)" : "transparent",
    color: hov ? T.saffron : T.ink, border: `1.5px solid ${hov ? T.saffron : T.hairline}`,
    borderRadius: 10, padding: "13px 32px", fontSize: 15, fontWeight: 600,
    cursor: "pointer", textDecoration: "none", display: "inline-block",
    transition: "all 0.22s ease", ...style,
  };
  return href
    ? <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={s}>{children}</a>
    : <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={s}>{children}</button>;
}
