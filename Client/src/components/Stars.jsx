import { T } from "./tokens";

export default function Stars({ n }) {
  return <div style={{ display: "flex", gap: 3 }}>
    {[1,2,3,4,5].map(i => <span key={i} style={{ color: i <= n ? "#E0921A" : T.hairline, fontSize: 15 }}>★</span>)}
  </div>;
}
