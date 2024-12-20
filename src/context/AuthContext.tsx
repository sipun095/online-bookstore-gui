import { createContext } from "react";


export interface AuthContextProps{
    isAuthenticated: boolean;
    userId: string | null;
    user: string | null;
    token: string | null;
    login: (user: string,userId: string, token:string)=> void;
    logout: ()=>void
}

export const AuthContext=createContext<AuthContextProps |undefined>(undefined);