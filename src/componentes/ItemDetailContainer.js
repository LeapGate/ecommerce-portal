import ItemDetail from "./ItemDetail"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {
      const [cargando, setCargando] = useState(true)
      const [items, setItems] = useState({})
      const {id}= useParams()
      
      useEffect(() =>{
        const itemsCollection = collection(db,"items")
        const consulta = getDocs(itemsCollection)
    
        consulta
        .then((res)=>{

          const productos = res.docs.map(doc => {

            const productosId = doc.data()
            productosId.id = doc.id
            
            return productosId
            
          })
          
          setItems(productos.filter(c => c.id == id))
          setCargando(false)
    
        })
        .catch((error)=>{
            console.log(error)
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