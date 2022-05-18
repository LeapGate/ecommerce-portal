/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore"



const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  const {nombreCategoria}= useParams()
  useEffect(() => {

    if(nombreCategoria ==undefined){

        const itemsCollection = collection(db,"items")
        const consulta = getDocs(itemsCollection)
    
        consulta
        .then((res)=>{

          const productos = res.docs.map(doc => {

            const productosId = doc.data()
            productosId.id = doc.id
            
            return productosId
            
          })
          
          setItems(productos)
            
    
        })
        .catch((error)=>{
            console.log(error)
        })

    }else { 
      
            const itemsCollection = collection(db,"items")
            const consulta = getDocs(itemsCollection)
            

          consulta
          .then((res) => {
              const productos = res.docs.map(doc => {

              const productosId = doc.data()
              productosId.id = doc.id
              
              return productosId
              
            })
            
            setItems(productos.filter(c => c.categoria == nombreCategoria))

          })

            
          .catch((error) => {
            console.log(error)
          })

        }

    },[nombreCategoria])

    return (
        <ItemList  items = {items} />
      )
    }
  

export default ItemListContainer