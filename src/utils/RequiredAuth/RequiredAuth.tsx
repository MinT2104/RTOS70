import { Outlet, Navigate } from "react-router-dom";


const RequiredAuth = () => {
    const userRedux = true

    return (userRedux ? <Outlet/> : <Navigate to="login"/>)
}
export default RequiredAuth;