import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/Home/HomeScreen"
import RegistrarseScreen from "../components/Registrarse/RegistrarseScreen";
import { Navbar } from "../components/UI/NavBar"
import { VisualizarScreen } from "../components/Visualizar.js/VisualizarScreen"

import { AppRouter } from "./AppRouter"
import { LoginRouter } from "./LoginRouter"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { ContactosScreen } from "../components/Contactos/ContactosScreen";
import { ProyectosScreen } from "../components/Proyectos/ProyectosScreen";

export const PrincipalRouter = () => {
 
   const {checking} = useSelector(state=> state.usuario)
   
  

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contactos" element={<ContactosScreen />} />
            <Route path="/proyectos" element={<ProyectosScreen />} />
            <Route path="/registrarse" element={<RegistrarseScreen />} />
            {/* <Route path="/visualizar" element={<VisualizarScreen />} /> */}
            {/*publicas*/}
            <Route 
                path='/usuario/*'
                element={
                    <PublicRouter checking = {checking}>
                        <LoginRouter />
                    </PublicRouter>
                }
            />
            {/*privadas*/}
            <Route 
                path='/app/*'
                element={
                    <PrivateRouter checking = {checking}>
                        
                        <AppRouter />
                    </PrivateRouter>
                }
            />
        </Routes>

    </BrowserRouter>
  )
}
