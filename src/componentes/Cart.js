
import { useContext, useState, useEffect } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"



const Cart = () => {
  const {carrito,precioTotal, eliminarProducto, vaciarCart} = useContext(contexto)
  

    const eliminarItem = (id) =>{
      eliminarProducto(id)
      
  }

  const handleTerminar = () =>{
    vaciarCart()
  }
  


  return (
    <>
      {carrito.length  > 0 ? carrito.map((item,indice)=>{
        return <main className="detalle-cart">
                <div className="card-body bg-secondary item-cart">
                  <h3 className="card-title">Nombre: {item.item}</h3>
                  <p className="card-text"> Cantidad:{item.cantidad}</p>
                  <p className="card-text"> precio:{item.precio * item.cantidad}</p>
                  <button onClick = {eliminarItem} className="btn btn-danger">Eliminar</button>
                </div>
              </main>
      }): <Link to="/"><button className="btn btn-primary"> Ir a la tienda</button></Link>}

      <p className="item-precio" > Total de compra : ${precioTotal}</p>

      <button onClick = {handleTerminar}className="btn btn-secondary btn-compra"> Terminar</button>

    </>
  )
}

export default Cart