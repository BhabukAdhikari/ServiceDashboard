import { useState, useContext, createContext } from "react"
import Toast from "src/toast/toast";

import { getLocalStorage, setRemoteStorage } from "src/utils/local-storage";

export const AuthContext = createContext();
/* eslint-disable */
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(getLocalStorage('token') ?? null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    /* eslint-disable */
    const handleLogin = (token) => {
        setToken(token);
        setIsAuthenticated(true);
        if (setIsAuthenticated === true) {
            return <Toast />
        }
        location.reload();
    }
    const handleLogout = () => {
        console.log("logout");
        setRemoteStorage('token', null)
        setIsAuthenticated(false);
        location.reload();
    }

    return (
        /* eslint-disable */
        <AuthContext.Provider value={{ token, isAuthenticated, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
