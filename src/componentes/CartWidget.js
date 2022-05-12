import { useContext } from "react"
import { Link } from "react-router-dom"
import  {contexto}  from "./CartContext"

const CartWidget = () => {

    const {cantidad_total} = useContext(contexto)

    return (
      <Link to="./cart">
        <span className="material-symbols-outlined">
        shopping_cart
        </span>
        {cantidad_total}
      </Link>
      
        
    )
    
  }

export default CartWidget