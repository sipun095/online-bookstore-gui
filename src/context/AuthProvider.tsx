import React, { ReactNode, useState } from 'react'
import { AuthContext, AuthContextProps } from "./AuthContext";

const AuthProvider : React.FC<{children: ReactNode}>= ({children}) => {
    const[user,setUser]=useState<string | null>(null);
    const[userId,setUserId]=useState<string | null>(()=>localStorage.getItem("userId"));

    const[isAuthenticated,setIsAuthenticated]=useState<boolean>(false)
    const[token,setToken]=useState<string | null>(()=>localStorage.getItem("token"))
    const login = (user: string,userId: string, token: string) => {
        setUser(user);
        setToken(token);
        setUserId(userId);
        setIsAuthenticated(true)
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
      };
      const logout = () => {
        setUser(null);
        setUserId(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
      };
      const contextValue: AuthContextProps = {
        isAuthenticated,
        userId,
        user,
        token,
        login,
        logout
      };
    
    
      return <AuthContext.Provider value={contextValue}>
          {children}
        </AuthContext.Provider>;
}

export default AuthProvider
