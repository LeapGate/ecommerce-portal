import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
const Main = () => {
  return (
      <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>}></Route>
            </Routes>

      </main>
    
  )
}
export default Main
