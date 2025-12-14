function Administracion() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Administración de Usuarios</h1>
      <p>Gestión de accesos y roles del sistema</p>

      <table style={table}>
        <thead style={thead}>
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>admin@roddmart.com</td>
            <td>Administrador</td>
            <td style={{ color: "green", fontWeight: "bold" }}>Activo</td>
          </tr>
          <tr>
            <td>seguridad1@roddmart.com</td>
            <td>Operador</td>
            <td style={{ color: "green", fontWeight: "bold" }}>Activo</td>
          </tr>
          <tr>
            <td>invitado@roddmart.com</td>
            <td>Consulta</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Inactivo</td>
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

export default Administracion;
