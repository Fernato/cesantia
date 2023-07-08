
import { Navigate } from "react-router-dom"

export const PublicRouter = ({ checking, children }) => {

    return checking ? <Navigate to='/app/cliente' />  :  children

}


