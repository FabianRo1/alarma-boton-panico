import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MapaLocales from "./pages/MapaLocales";
import Historial from "./pages/Historial";
import Administracion from "./pages/Administracion";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* APP CON SIDEBAR */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mapa" element={<MapaLocales />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/admin" element={<Administracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
