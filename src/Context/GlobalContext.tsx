import { ReactNode, createContext, useContext, useState } from "react";

interface GlobalContextProviderProps {
    children: ReactNode
}

// interface Token {
//     access_token?: string;
//     tenant_id?: number;
//     user_id?: number;
//     user_name?: string;
// }

interface GlobalContex {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContex = createContext({} as GlobalContex)

export function useGlobalContext() {
    return useContext(GlobalContex)
}

export function GlobalContextProvider({children}: GlobalContextProviderProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');
    
    return (
        <GlobalContex.Provider value={{open, setOpen, token, setToken}}>
            {children}
        </GlobalContex.Provider>
    )
    
}