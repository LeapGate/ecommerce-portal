import Header from "./componentes/Header"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"

const App = () =>{
    return (
        <>
        <Header/>
        <ItemListContainer greetings ="Aca va a el catalogo"/>
        <ItemDetailContainer/>
        <Footer/>
        </>
    )
}

export default App