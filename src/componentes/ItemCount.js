import { useState } from "react"

const ItemCount = (props) => {
    const [contador,setContador] = useState(props.inital)

    const aumentarContador = () =>{
        
        if(contador < props.stock){
              setContador(contador + 1)  
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
        <button onClick={props.onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount