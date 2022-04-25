import Header from "./componentes/Header"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"


const App = () =>{
    return (
        <>
        <Header/>
        <ItemListContainer greetings ="Aca va a el catalogo"/>
        <Footer/>
        </>
    )
}

export default App