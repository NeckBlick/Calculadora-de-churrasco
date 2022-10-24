import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [logado, setLogado] = useState(false)
    const[user, setUser] = useState()

    const Logar = async  (usuario) => {
        let buscarUser =  AsyncStorage.getItem(usuario).then(response => setUser(JSON.parse(response)))
        console.log(user)
        // buscarUser ? setLogado(true) : setLogado(false)
    }
    const Deslogar = (usuario) => {
        setLogado(false)
        AsyncStorage.removeItem(usuario)
    }
    return(
        <AuthContext.Provider value={{Logar, Deslogar, logado}}>
            {children}
        </AuthContext.Provider>
    )
}