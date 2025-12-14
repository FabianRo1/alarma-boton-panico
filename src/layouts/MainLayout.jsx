import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <div
        style={{
          width: "220px",
          background: "#1e40af",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Roddmart</h2>

        <nav style={{ marginTop: "30px" }}>
          <p><Link style={link} to="/dashboard">Dashboard</Link></p>
          <p><Link style={link} to="/mapa">Mapa de Locales</Link></p>
          <p><Link style={link} to="/historial">Historial</Link></p>
          <p><Link style={link} to="/admin">Administración</Link></p>
        </nav>
      </div>

      {/* CONTENIDO */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  display: "block",
  margin: "10px 0",
};

export default MainLayout;
