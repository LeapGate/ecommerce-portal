import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"



const ItemDetail = ({item}) => {

  const [stock,setStock] = useState(0)


  useEffect(() => {

    if(stock !== 0){
      console.log("Tiene algo")
    }else{
      console.log("vacio")
    }
  
    return () => {
      
    }
  }, [])
  
  const handleCompra = (contador) =>{
    setStock(contador)
}

  


  return (
    <div className="col-12 mb-2 col-mb-4">           
            <div className="card text-white bg-secondary mb-3 stylo-width">
                <div className="card-body">
                    <img src={item.img}/>
                    <h3 className="card-title">{item.nombre}</h3>
                    <p className="card-text">{item.precio}</p>
                    <p className="card-text">{item.stock}</p>
                    <p className="card-text">Descripcion del producto</p>
                    
                    <ItemCount stock={item.stock} initial = {1} compra = {handleCompra}/>
                    <button className="btn btn-danger"><Link to={"/cart"}>Al Carrito</Link></button>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail