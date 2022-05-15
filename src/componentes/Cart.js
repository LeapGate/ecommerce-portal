import { useContext, useState, useEffect } from "react"
import { contexto } from "./CartContext"

const itemsBaseDatos = [
  {
    id: 1,
    nombre: "microfono",
    precio : 1000,
    categoria: "electronica",
    stock : 10,
  },
  {
    id: 2,
    nombre:"Monitor",
    precio : 6000,
    categoria: "electronica",
    cantidad: 0,
    stock : 15 
  },
  {
    id: 3,
    nombre:"Pantalon", 
    precio :1500, 
    categoria: "ropa",
    stock : 5 
  },
  {
    id: 4,
    nombre:"Remera", 
    precio :2000, 
    categoria: "ropa",
    stock : 20 
  },
  {
    id: 5,
    nombre:"Fiat 1", 
    precio :2000, 
    categoria: "vehiculo",
    stock : 20 
  },
  {
    id: 6,
    nombre:"Audi A7", 
    precio :2000, 
    categoria: "vehiculo",
    stock : 20 
  }
]

const Cart = ({children}) => {
  const [compra, setCompra] = useState([])
  const {carrito,cantidadTotal,precioTotal, eliminarProducto, vaciarCart} = useContext(contexto)

  useEffect(() => {
    setCompra(carrito)

    
  },[])

  return (
    <div>
      <p>Carrito</p>
      <p>${precioTotal}</p>
      {carrito}
    </div>
  )
}

export default Cart