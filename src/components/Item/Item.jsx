
import { Link } from "react-router-dom";




const Item = ({ products }) => {

        return (
            <div className="productos">
                <img src={products.image} alt="" />
                <div className="producto-detalle">
                    <h3 className="productos-titulo">{products.title}</h3>
                    <p className="productos-precio">${products.price}</p>
                    <Link to={`/item/${products.id}`}><button className="productos-agregar">VER MÁS</button></Link>
                </div>
            </div>
        )
    }


export default Item