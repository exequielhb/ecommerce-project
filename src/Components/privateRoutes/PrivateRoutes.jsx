import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext" 

export const PrivateRoutes = ({children}) => {

    const {currentUser} = useContext(AuthContext)

    if(!!currentUser){
        return children
    }
    return <Navigate to="/login" />

}
