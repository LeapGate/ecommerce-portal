import { useState } from "react"

const ItemCount = ({stock,initial,onAdd}) => {
    const [contador,setContador] = useState(initial)

    const aumentarContador = () =>{
        
        if(contador < stock){
              setContador(contador + 1 )
              console.log(contador)  
        }
    }

    const decrementarContador = () =>{
        if (contador !== 0){
            setContador(contador - 1)
        }
    }

    
     

  return (
    <>
        <p> Compra : {contador}</p>
        <button onClick={aumentarContador}> Aumentar</button>
        <button onClick={decrementarContador}> Disminuir</button>
        <button onClick={onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount