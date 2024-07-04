import { ReactNode, createContext, useContext, useState } from "react";

type GlobalContextProviderProps = {
    children: ReactNode
}

type GlobalContex = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContex = createContext({} as GlobalContex)

export function useGlobalContext() {
    return useContext(GlobalContex)
}

export function GlobalContextProvider({children}: GlobalContextProviderProps) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <GlobalContex.Provider value={{open, setOpen}}>
            {children}
        </GlobalContex.Provider>
    )
    
}