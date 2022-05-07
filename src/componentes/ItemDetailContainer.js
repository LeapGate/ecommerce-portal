import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const ItemsBaseDatos = [
  {
    id: 1,
    nombre: "microfono",
    precio : 500,
    stock : 10,
    img : "../public/microfo1.jpeg"
  },
  {
    id: 2,
    nombre:"Monitor",
    precio : 1500, 
    stock : 15 
  },
  {
    id: 3,
    nombre:"monitor", 
    precio :3000, 
    stock : 5 
  },
  {
    id: 4,
    nombre:"Parlantes", 
    precio :2000, 
    stock : 20 
  }
]

const ItemDetailContainer = (props) => {
      const [cargando, setCargando] = useState(true)
      const [items, setItems] = useState({})

      useEffect(() =>{
        const promesa = new Promise((res)=>{
          setTimeout(() =>{
            
            res(ItemsBaseDatos)
    
          }, 4000)
        })
        .then(() => {
          setCargando(false)
          setItems(ItemsBaseDatos)
          
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
            <ItemDetail producto = {items[1]}/>
          </div>
        )
      }
  
}

export default ItemDetailContainer