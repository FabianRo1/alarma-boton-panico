import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <div style={card}>
        <h2>Iniciar Sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          style={input}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={input}
        />

        <button
          style={button}
          onClick={() => navigate("/dashboard")}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f3f4f6",
};

const card = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "300px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
};

const button = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#1e40af",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Login;
