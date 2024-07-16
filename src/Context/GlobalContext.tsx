import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface GlobalContextProviderProps {
  children: ReactNode;
}

interface Persons {
  user_id?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  job_title?: string;
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
  persons: Persons[];
}

const GlobalContex = createContext({} as GlobalContex);

export function useGlobalContext() {
  return useContext(GlobalContex);
}

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [persons, setPersons] = useState<Persons[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v2/def-persons");
        setPersons(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("context: ", persons);

  return (
    <GlobalContex.Provider value={{ open, setOpen, token, setToken, persons }}>
      {children}
    </GlobalContex.Provider>
  );
}
