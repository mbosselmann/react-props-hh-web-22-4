export default function List({ children, color }) {
  return <ul style={{ backgroundColor: color }}>{children}</ul>;
}
