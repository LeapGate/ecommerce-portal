import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import {contexto} from "./CartContext"



const ItemDetail = ({item}) => {

  const{ agregarProducto } = useContext(contexto)

  const [cantidad,setCantidad] = useState(0)

  
  
  const handleCompra = (contador) =>{
    setCantidad(contador)
    agregarProducto(item, cantidad)
}

  


  return (
    <div className="col-12 mb-2 col-mb-4">           
            <div className="card text-white bg-secondary mb-3 stylo-width">
                <div className="card-body">
                    <img src={item.img}/>
                    <h3 className="card-title">Nombre del Producto: {item.nombre}</h3>
                    <p className="card-text">Item Id :{item.id}</p>
                    <p className="card-text">${item.precio}</p>
                    <p className="card-text">Disponible:{item.stock}</p>
                    <p className="card-text">Descripcion del producto</p>
                    
                    <ItemCount stock={item.stock} initial = {1} compra = {handleCompra}/>
                    <button className="btn btn-danger"><Link to={"/cart"}>Al Carrito</Link></button>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail