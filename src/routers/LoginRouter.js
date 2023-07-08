
import { Routes, Route} from "react-router-dom";

import { LoginScreen } from "../components/usuario/LoginScreen";


export const LoginRouter = () => {
  return (
    <div >
      <Routes>
        
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  )
}
