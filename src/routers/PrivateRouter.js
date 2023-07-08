
import { Navigate } from "react-router-dom"


export const PrivateRouter = ({ checking, children }) => {

  //return checking ?  children :   <Navigate to='/usuario/login' />

  return checking ?  children :   <Navigate to='/usuario/login' />

}
