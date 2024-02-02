import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState(null)

  useEffect(() => {
    const headerToken = localStorage.getItem('token');
    console.log("test")
    if (headerToken) {
      const decoded = jwtDecode(headerToken);
      setUser(decoded);
    } else {
      setUser(null);
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const storeToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token)
  }

  const value = {
    isAuthenticated: !!user,
    user,
    logout,
    storeToken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};