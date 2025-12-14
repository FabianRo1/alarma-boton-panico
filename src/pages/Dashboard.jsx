function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Panel de Control</h1>
      <p>Resumen general del sistema de alarmas</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={{ background: "#dbeafe", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Alertas Activas</h3>
          <h1>3</h1>
        </div>

        <div style={{ background: "#dcfce7", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Tiempo de Respuesta</h3>
          <h1>2 min</h1>
        </div>

        <div style={{ background: "#fef3c7", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>Estado del Sistema</h3>
          <h1>Operativo</h1>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>Últimas Alertas</h2>

      <div style={{ background: "white", padding: "20px", borderRadius: "10px", marginTop: "10px" }}>
        <p>🔴 Local 12 – Botón de pánico activado</p>
        <p>🟡 Local 7 – Alerta resuelta</p>
        <p>🟢 Local 3 – Alerta en revisión</p>
      </div>
    </div>
  );
}

export default Dashboard;
