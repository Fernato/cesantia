
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ActividadesScreen } from "../components/Actividades/ActividadesScreen";
import { ClienteScreen } from "../components/Clientes/ClienteScreen";
import { HomeScreen } from "../components/Home/HomeScreen";
import { PresupuestoScreen } from "../components/Presupuesto/PresupuestoScreen";
import { ReporteScreen } from "../components/Reportes/ReporteScreen";
import { VisualizarScreen } from "../components/Visualizar.js/VisualizarScreen";

import { Navbar } from "../components/UI/NavBar";

export const AppRouter = () => {

    
    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cliente" element={<ClienteScreen />} />
                <Route path="/actividades" element={<ActividadesScreen />} /> 
                <Route path="/presupuesto" element={<PresupuestoScreen />} /> 
                <Route path="/reporte" element={<ReporteScreen />} /> 
                <Route path="/visualizar" element={<VisualizarScreen />} />
            </Routes>
        </BrowserRouter>
    )
};
