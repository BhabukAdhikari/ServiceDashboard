import { useState, useContext, createContext } from "react"
import { Toast } from "src/toast/toast";

import { getLocalStorage, setRemoteStorage } from "src/utils/local-storage";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(getLocalStorage('token') ?? null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin = (token) => {
        setToken(token);
        setIsAuthenticated(true);
        location.reload();
    }
    const handleLogout = () => {
        console.log("logout");
        setRemoteStorage('token', null)
        setIsAuthenticated(false);
        location.reload();
    }

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, handleLogin, handleLogout }}>
            {children}
            {isAuthenticated ? <Toast /> : ""}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
