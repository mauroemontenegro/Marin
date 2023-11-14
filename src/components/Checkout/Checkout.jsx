import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection , addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client";
import style from "./checkout.css"

const Checkout = () => {
    const [ pedidosId, setPedidoId ] = useState('')
    const { carrito, priceTotal, vaciarCarrito } = useContext(CartContext);

    const { register , handleSubmit} = useForm();

    const comprar = (data)=>{
        const pedidos = {
            cliete: data ,
            productos: carrito ,
            tota: priceTotal()
        }
        console.log(pedidos)

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef , pedidos)
        .then((doc)=>{
            setPedidoId(doc.id)
            vaciarCarrito();
        })
    }
    if(pedidosId){
        return(
            <div className="fin">
                <h3>Muchas gracias por tu compra</h3>
                <p>Tu numero de pedido es: {pedidosId}</p>
            </div>
        )
    }
    return (
        <div className="container">
            <h3 className="main-title">FINALIZAR COMPRA</h3>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">COMPRAR</button>

            </form>
        </div>
    )
}
export default Checkout