import { Navigate,Outlet } from "react-router-dom"


const ProtectedRoutes = ({
    caActivate,
    redirectPath = '/'
}) => {

    if (!caActivate) {
        return <Navigate to={redirectPath} replace/>
    }

  return  <Outlet/>
}

export default ProtectedRoutes
