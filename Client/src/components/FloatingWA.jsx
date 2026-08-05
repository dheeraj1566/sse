export default function FloatingWA() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
      style={{
        position: "fixed", bottom: 26, right: 26, zIndex: 999,
        width: 56, height: 56, borderRadius: "50%", background: "#25D366",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, textDecoration: "none",
        boxShadow: "0 6px 22px rgba(37,211,102,0.38)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        animation: "waFloat 3s ease-in-out 2.5s infinite",
      }}>💬
      <style>{`@keyframes waFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
    </a>
  );
}
