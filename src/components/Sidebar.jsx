import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li><Link style={{ color: "white" }} to="/dashboard">Monitoreo</Link></li>
      <li><Link style={{ color: "white" }} to="/mapa">Mapa de Locales</Link></li>
      <li><Link style={{ color: "white" }} to="/historial">Historial</Link></li>
      <li><Link style={{ color: "white" }} to="/admin">Administración</Link></li>
    </ul>
  );
}
