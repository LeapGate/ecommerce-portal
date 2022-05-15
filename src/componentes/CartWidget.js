import { useContext } from "react"
import { Link } from "react-router-dom"
import  {contexto}  from "./CartContext"

const CartWidget = () => {

    const {cantidadTotal} = useContext(contexto)
    return (
      <Link to="./cart">
        <span className="material-symbols-outlined">
        shopping_cart
        
        </span>
        {cantidadTotal}
      </Link>
      
        
    )
    
  }

export default CartWidget