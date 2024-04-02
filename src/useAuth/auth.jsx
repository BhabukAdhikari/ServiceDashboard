import { useNavigate } from "react-router-dom";
import { useState, useContext, createContext } from "react"

import { getLocalStorage } from "src/utils/local-storage";

export const AuthContext = createContext();
/* eslint-disable */
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(getLocalStorage('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    /* eslint-disable */
    const handleLogin = (token) => {
        setToken(token);
        setIsAuthenticated(true);
    }
    const handleLogout = () => {
        setToken(null);
        setIsAuthenticated(false);
        navigate('/login')
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
