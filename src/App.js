import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import { BrowserRouter } from "react-router-dom"
import Main from "./componentes/Main"

const App = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App