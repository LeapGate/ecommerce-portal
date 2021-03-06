import {Link} from "react-router-dom"
const Items = ({item}) => {


  return (
    <div className="col-12 mb-2 col-mb-4">           
            <div className="card text-white bg-secondary mb-3 stylo-width">
                <div className="card-body">
                    <img src={item.img}/>
                    <h3 className="card-title">{item.nombre}</h3>
                    <p className="card-text">{item.categoria}</p>
                    <p className="card-text">{item.precio}</p>
                    <button className="btn btn-danger">
                      <Link to={`/item/${item.id}`}>Ver detalles</Link>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Items