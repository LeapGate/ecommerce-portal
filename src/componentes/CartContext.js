import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider} =  contexto



const MiProvider = ({children}) =>{
    const [carrito, setCarrito] =  useState({})
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)

    const agregarProducto = (producto, cantidad) => {

    }

    const eliminarProducto = (id) =>{

    }

    const vaciarCart = () => {
        setCarrito([])
    }

    const estaEnCart = (producto) =>{

    }


    const valorContext = {
        cantidad_total,
        precio_total,
        carrito,

    }

    return(
        <Provider value = {{valorContext}}>
            {children}
        </Provider>
    )
}
export default MiProvider