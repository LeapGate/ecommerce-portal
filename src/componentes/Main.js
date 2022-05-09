import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"

const Main = () => {
  return (
      <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/categoria/:nombreCategoria" element={<ItemListContainer/>}></Route>
            </Routes>

      </main>
    
  )
}
export default Main
