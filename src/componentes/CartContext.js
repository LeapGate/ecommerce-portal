import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider} =  contexto



const MiProvider = ({children}) =>{
    const [carrito, setCarrito] =  useState({})




    const valorContext = {
        cantidad_total : 0,
        precio_total :0,
        carrito : []

    }
    return(
        <Provider value = {{valorContext}}>
            {children}
        </Provider>
    )
}
export default MiProvider