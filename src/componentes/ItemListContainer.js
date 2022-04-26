import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    const comprarItem = () => {
        console.log("Has comprado")
    }

    return (
      <main>
        <p>{props.greetings}</p>
        <ItemCount stock ={5} initial ={1} onAdd = {comprarItem}/>
      </main>
      )
    }
  

export default ItemListContainer