import { Provider } from "react-redux"
import { store } from "./store/store"
import { PrincipalRouter } from "./routers/PrincipalRouter"


export const CesantiasApp = () => {
    return (
        <Provider store = {store}>
            
            <PrincipalRouter  />
            
        </Provider>
    )
}
