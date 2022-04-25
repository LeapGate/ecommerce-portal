import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    return (
      <main>
        <p>{props.greetings}</p>
        <ItemCount/>
      </main>
      )
    }
  

export default ItemListContainer