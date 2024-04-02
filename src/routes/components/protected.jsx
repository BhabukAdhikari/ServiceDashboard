import { Outlet,useNavigate } from "react-router-dom";

import { getLocalStorage } from "src/utils/local-storage";


export const Protected = () => {
    const Navigate = useNavigate()
    const token = getLocalStorage('token')

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    )
}