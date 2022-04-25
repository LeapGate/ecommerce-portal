import { useState } from "react"

const ItemCount = () => {
    const [contador,setContador] = useState(0)
    
    const onAdd = () =>{
        if (contador < 5){
            setContador(contador + 1)
        }
    }
    
    const onLess = () =>{
        if (contador !== 0)
            setContador (contador - 1)
    }

  return (
    <>
        <p> Compra : {contador}</p>
        <button onClick={onAdd}> Aumentar</button>
        <button onClick={onLess}> Disminuir</button>
    </>
  )
}

export default ItemCount