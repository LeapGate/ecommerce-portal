import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider} =  contexto

 const MiProvider = ({defaultValue = [], children}) =>{
    const [carrito, setCarrito] =  useState(defaultValue)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const agregarProducto = (item, cantidad) => {


        if (estaEnCart(item.id)){
          
            const newCarrito = [...carrito];

            for ( const producto of newCarrito){
                if( producto.id === producto.id){
                    producto.cantidad = producto.cantidad + cantidad;
                }
            }
            setCarrito(newCarrito)
            }else{
                
                setCarrito([
                    ...carrito, {
                        id : item.id,
                        item : item.nombre,
                        precio : item.precio,
                        cantidad,
                        
                    }])
                    
            }
            
            setCantidadTotal(cantidadTotal + cantidad)
            setPrecioTotal (precioTotal + (item.precio* cantidad))
        
        }

    

    const eliminarProducto = (id) =>{
        const newCarrito = [...carrito].map(element => element.id !== id);
       /*  setCarrito(newCarrito); */
        setCarrito(newCarrito.filter(prod => prod.id !== id ) )
        
        
    }

    const vaciarCart = () => {
        setCarrito([])
        setCantidadTotal([])
        setPrecioTotal([])
    }

    const estaEnCart = (id) =>{
        
      return carrito.find(e => e.id === id)

    }
    
    const valorContext = {
        agregarProducto,
        eliminarProducto,
        vaciarCart,
        estaEnCart,
        cantidadTotal,
        precioTotal,
        carrito,

    }

    return(
        <Provider value = {{carrito,precioTotal,cantidadTotal, eliminarProducto, vaciarCart, agregarProducto}}>
            {children}
        </Provider>
    )
}
export default MiProvider