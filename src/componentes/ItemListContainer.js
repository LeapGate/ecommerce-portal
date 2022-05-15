/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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



const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  const {nombreCategoria}= useParams()
  useEffect(() => {
    if(nombreCategoria ==undefined){

      const pedido = new Promise((res)=>{
        
        setTimeout(() =>{

          res(itemsBaseDatos)
  
        }, 2000)
      })
      pedido
      .then((contenido) => {
        setItems(itemsBaseDatos)
      })
      .catch((error) => {
        console.log("Ha ocurrido un error")
      })

    }else{
      const pedido = new Promise((res)=>{
        
        setTimeout(() =>{

          res(itemsBaseDatos)
  
        }, 2000)
      })
      pedido
      .then((contenido) => {
        
        setItems(itemsBaseDatos.filter(c => c.categoria == nombreCategoria))
      })
      .catch((error) => {
        console.log("Ha ocurrido un error")
      })

    }


  },[nombreCategoria])

    return (
        <ItemList  items = {items} />
      )
    }
  

export default ItemListContainer