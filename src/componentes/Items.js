
const Items = ({item}) => {


  return (
    <div className="card">
        <p>{item.id}</p>
        <h3>{item.nombre}</h3>
        <h4>{item.precio}</h4>
        <button className="btn btn-danger"></button>

    </div>
  )
}

export default Items