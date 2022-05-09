import Nav from "./NavBar"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
        <Link to="/"><h1>Ecommerce</h1></Link>
        <Nav/>
    </header>
  )
}

export default Header