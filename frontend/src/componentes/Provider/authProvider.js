import axios from "axios";
import { createContext, useContext, useEffect,
useMemo, useState,  } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
}


useEffect(() => {
    const savedToken = localStorage.getItem("meuToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );

  export { AuthProvider, AuthContext };