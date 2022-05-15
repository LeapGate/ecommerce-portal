import { useState, useContext } from "react"


const ItemCount = ({stock,initial, compra}) => {
    const [contador,setContador] = useState(initial)



    const aumentarContador = () =>{
        
        if(contador < stock){
              setContador(contador + 1 )
        }
    }

    const decrementarContador = () =>{
        if (contador !== 0){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        compra(contador)
    }

    
     

  return (
    <>
        <p> Compra : {contador}</p>
        <button onClick={aumentarContador} className ="btn btn-danger"> Aumentar</button>
        <button onClick={decrementarContador}className ="btn btn-danger"> Disminuir</button>
        <button onClick={confirmar}className ="btn btn-dark">confirmar</button>
    </>
  )
}

export default ItemCount