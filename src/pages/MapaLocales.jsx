function MapaLocales() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Mapa de Locales</h1>
      <p>Visualización del estado de seguridad por local</p>

      <h2 style={{ marginTop: "30px" }}>Piso 1</h2>

      <div style={grid}>
        <div style={{ ...local, background: "#dcfce7" }}>
          <h3>Local 101</h3>
          <p>Estado: Normal</p>
        </div>

        <div style={{ ...local, background: "#fee2e2" }}>
          <h3>Local 102</h3>
          <p>⚠️ Alerta Activa</p>
        </div>

        <div style={{ ...local, background: "#dcfce7" }}>
          <h3>Local 103</h3>
          <p>Estado: Normal</p>
        </div>
      </div>

      <h2 style={{ marginTop: "30px" }}>Piso 2</h2>

      <div style={grid}>
        <div style={{ ...local, background: "#dcfce7" }}>
          <h3>Local 201</h3>
          <p>Estado: Normal</p>
        </div>

        <div style={{ ...local, background: "#fef3c7" }}>
          <h3>Local 202</h3>
          <p>🟡 En Revisión</p>
        </div>

        <div style={{ ...local, background: "#dcfce7" }}>
          <h3>Local 203</h3>
          <p>Estado: Normal</p>
        </div>
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "15px",
};

const local = {
  padding: "20px",
  borderRadius: "10px",
};

export default MapaLocales;
