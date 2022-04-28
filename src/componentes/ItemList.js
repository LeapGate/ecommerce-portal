import Items from "./Items"


const ItemList = ({items}) => {

   

  return (
    <>
        {items.map((item,indice) =>{

            return <Items item = {item}/>
        
        })}
    </>
  )
}

export default ItemList