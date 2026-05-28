import React from "react";
import { T } from "./tokens";

export default function SectionLabel({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14,
    }}>
      <span style={{ display: "block", width: 28, height: 2, background: T.saffron, borderRadius: 2 }} />
      <span style={{ color: T.saffron, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}
