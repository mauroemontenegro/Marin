import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection , addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client";
import style from "./checkout.css"

const Checkout = () => {
    const [ pedidosId, setPedidoId ] = useState('')
    const { carrito, priceTotal, vaciarCarrito } = useContext(CartContext);

    const { register ,formState:{ errors }, handleSubmit} = useForm();

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

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", {
                    required:true
                })} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email",{
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ,
                    required:true 
                })}/>
                {errors.email?.type === 'pattern' && <p className="errors">El formato de email es incorrecto</p>}
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono", {
                    pattern: /^\+?[0-9\s.-]+$/ ,
                    required:true 
                })} />
                {errors.phone?.type === 'pattern' && <p className="errors">El formato de telefono es incorrecto</p>}
  
                <button className="enviar" type="submit">COMPRAR</button>

            </form>
        </div>
    )
}
export default Checkout