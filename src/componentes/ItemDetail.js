const ItemDetail = ({producto}) => {
  return (
    <div className="col-12 mb-2 col-mb-4">           
            <div className="card text-white bg-secondary mb-3 stylo-width">
                <div className="card-body">
                    <img src={producto.img}/>
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-text">{producto.precio}</p>
                    <button className="btn btn-danger">Al Carrito</button>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail