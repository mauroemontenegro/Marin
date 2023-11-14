import ItemCount from "../Cantidad/ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({data})=>{

    const [contador, setContador] = useState(1);

    const {carrito , agregarCarrito} = useContext(CartContext)

    const suma = () => {
        setContador(contador + 1);
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1)
    }
    
    return(
        <>
         <h2 className="dt-pd">DETALLES DE PRODUCTO</h2>
            <div className="content">
                <div className="img-detalle">
                    <img src={data.image} alt="" />
                </div>
                <div className="detalle">
                    <h3>{data.title}</h3>
                    <ul>
                        <li><p><span>Descripcion:</span> {data.description}</p></li>
                        <li><p><span>Categoria:</span> {data.categoryId}</p></li>
                        <li><p className="productos-precio"><span>Precio:</span>${data.price}</p></li>
                    </ul>
                    <ItemCount 
                    contador={contador}
                    suma={suma}
                    resta={resta}
                    buyProducts={()=>agregarCarrito(data, contador)}
                    />
                </div>
            </div>
        </>
    )
}
export default ItemDetail