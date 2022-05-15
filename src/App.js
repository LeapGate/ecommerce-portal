import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import { BrowserRouter } from "react-router-dom"
import Main from "./componentes/Main"
import MiProvider from "./componentes/CartContext"

const App = () =>{
    return (
        <BrowserRouter>
            <MiProvider>
                <Header/>
                <Main/>
            </MiProvider>
            <Footer/>
        </BrowserRouter>
    )
}

export default App