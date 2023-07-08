import { Routes, Route, BrowserRouter} from "react-router-dom";
import { ActividadesScreen } from "../components/Actividades/ActividadesScreen";
import { ClienteScreen } from "../components/Clientes/ClienteScreen";
import { HomeScreen } from "../components/Home/HomeScreen";
import { PresupuestoScreen } from "../components/Presupuesto/PresupuestoScreen";
import { ReporteScreen } from "../components/Reportes/ReporteScreen";
import { Navbar } from "../components/UI/NavBar";
import { VisualizarScreen } from "../components/Visualizar.js/VisualizarScreen";
import { VerClienteScreen } from "../components/VerCliente/VerClienteScreen";

export const AppRouter = () => {
  return (
    <div >
      
        <Routes> 
            <Route path="/cliente" element={<ClienteScreen />} />
            <Route path="/actividades" element={<ActividadesScreen />} /> 
            <Route path="/presupuesto" element={<PresupuestoScreen />} /> 
            <Route path="/reporte" element={<ReporteScreen />} /> 
            <Route path="/cliente/:id" element={<VerClienteScreen />} />
            <Route path="cliente/:id/visualizar" element={<VisualizarScreen />} />
           {/* <Route path="/visualizar" element={<VisualizarScreen />} />*/}
        </Routes>
    </div>
  )
}
