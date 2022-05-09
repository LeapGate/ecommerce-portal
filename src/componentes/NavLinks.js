import {Link} from "react-router-dom"
const NavLinks = () => {
  return (
    <nav className="nav">
        <Link to="/categoria/vehiculo" className="nav__links">Vehiculos</Link>
        <Link to="/categoria/electronica" className="nav__links">Electronica</Link>
        <Link to="/categoria/ropa" className="nav__links">Ropa</Link>
    </nav>
  )
}

export default NavLinks