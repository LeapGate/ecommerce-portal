import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="nav">
        <a href="#" className="nav__links">Inicio</a>
        <a href="#" className="nav__links">Vehiculos</a>
        <a href="#" className="nav__links">Electronica</a>
        <CartWidget/>
    </nav>
    
  )
}
export default NavBar
