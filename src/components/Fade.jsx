import useScrollVisible from "./useScrollVisible";

export default function Fade({ children, delay = 0, style = {}, ...rest }) {
  const [ref, visible] = useScrollVisible();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      ...style,
    }} {...rest}>{children}</div>
  );
}
