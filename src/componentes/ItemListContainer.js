import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    const onAdd = () => {
        console.log("Has comprado")
    }

    return (
      <main>
        <p>{props.greetings}</p>
        <ItemCount stock ={5} initial ={1} onAdd = {onAdd}/>
      </main>
      )
    }
  

export default ItemListContainer