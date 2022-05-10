import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
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

const ItemDetailContainer = () => {
      const [cargando, setCargando] = useState(true)
      const [items, setItems] = useState({})
      const {id}= useParams()
      
      useEffect(() =>{
        const promesa = new Promise((res)=>{
          setTimeout(() =>{
            
            res(itemsBaseDatos)
    
          }, 4000)
        })
        promesa
        .then(() => {
          setCargando(false)
          setItems(itemsBaseDatos.filter(c => c.id == id))
          
        })
        .catch((error) => {
          console.log("Ha ocurrido un error")
        })
    
    
      },[])
      if(cargando){
        return (
          <p>Cargando...</p>
        )
      }else{
        return(
          <div className="detalle-item">
            <ItemDetail item = {items[0]}/>
          </div>
        )
      }
  
}

export default ItemDetailContainer