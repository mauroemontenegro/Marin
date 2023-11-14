import { useContext } from "react"
import style from '../Carrito/carrito.css'
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {

    const { carrito, priceTotal, deleteProd } = useContext(CartContext);


    return (
        <div className="modal-container">

            <div className="modal-header">
                <h3 className="carrito">CARRITO DE COMPRAS</h3>
            </div>

            {carrito.map((prod, index) => (
                    <div key={index} className="modal-content">
                        <img src={prod.image} alt="" />
                        <h3>{prod.title}</h3>
                        <p className="precio">${prod.price}</p>
                        <p className="cantidad">Cantidad: {prod.contador}</p>
                        <p className="precio-cantidad">Total: ${prod.price * prod.contador}</p>
                        <button className="eliminar-boton" onClick={() => deleteProd(prod.id)}>X</button>
                    </div>
            ))
            }


            {carrito.length > 0 ?
                <>
                    <h3 className="precioTotal">Precio Total: ${priceTotal()}</h3>
                    <Link to="/checkout"><button className="finalizar">Finalizar Compra</button></Link>
                </>
                : <h3 className="carritoVa">CARRITO DE COMPRAS VACIO :(</h3>
            }

        </div>
    )
}
export default Carrito