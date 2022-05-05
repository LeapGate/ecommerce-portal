/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"

import { useEffect, useState } from "react"

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

const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  
  useEffect(() => {

    const promesa = new Promise((res)=>{
      setTimeout(() =>{
        
        res(ItemsBaseDatos)

      }, 2000)
    })
    .then((contenido) => {

      //console.log("ha salido bien")

      setItems(ItemsBaseDatos)
    })
    .catch((error) => {
      console.log("Ha ocurrido un error")
    })


  },[])

    return (
      <main>
        <ItemList  items = {items} />
      </main>
      )
    }
  

export default ItemListContainer