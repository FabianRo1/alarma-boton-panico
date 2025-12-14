function Historial() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Historial de Alertas</h1>
      <p>Registro de eventos de seguridad del sistema</p>

      <table style={table}>
        <thead style={thead}>
          <tr>
            <th>Fecha</th>
            <th>Local</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-05-01</td>
            <td>Local 102</td>
            <td>Botón de Pánico</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Activa</td>
          </tr>
          <tr>
            <td>2025-05-02</td>
            <td>Local 202</td>
            <td>Alerta Manual</td>
            <td style={{ color: "orange", fontWeight: "bold" }}>
              En Revisión
            </td>
          </tr>
          <tr>
            <td>2025-05-03</td>
            <td>Local 103</td>
            <td>Botón de Pánico</td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              Resuelta
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const table = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
  backgroundColor: "white",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const thead = {
  backgroundColor: "#1e40af",
  color: "white",
};

export default Historial;
