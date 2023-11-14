import style from "./footer.css"

import american from "../../imagenes/medios de pago/amex@2x.png"
import argen from "../../imagenes/medios de pago/argencard@2x.png"
import master from "../../imagenes/medios de pago/mastercard@2x.png"
import diners from "../../imagenes/medios de pago/diners@2x.png"
import banel from "../../imagenes/medios de pago/banelco@2x.png"
import cabal from "../../imagenes/medios de pago/cabal@2x.png"
import naranja from "../../imagenes/medios de pago/tarjeta-naranja@2x.png"
import shoping from "../../imagenes/medios de pago/tarjeta-shopping@2x.png"
import pagof from "../../imagenes/medios de pago/pagofacil@2x.png"
import rapip from "../../imagenes/medios de pago/rapipago@2x.png"
import visa from "../../imagenes/medios de pago/visa@2x.png"
import mercad from "../../imagenes/medios de pago/mercadopago@2x.png"


const Footer = () => {
    return (
        <>
            <footer>
                <div className="navegacion2">
                    <h3>Navegacion</h3>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div className="medios-de-pagos">
                    <h3>Medios de pago</h3>
                    <img src={american} alt="" />
                    <img src={argen} alt="" />
                    <img src={master} alt="" />
                    <img src={diners} alt="" />
                    <img src={banel} alt="" />
                    <img src={cabal} alt="" />
                    <img src={naranja} alt="" />
                    <img src={shoping} alt="" />
                    <img src={argen} alt="" />
                    <img src={pagof} alt="" />
                    <img src={rapip} alt="" />
                    <img src={mercad} alt="" /> 
                </div>
                <div className="inscribirse">
                    <h3>¡Inscribite!</h3>
                    <p>"¡Desbloquee acceso anticipado, ofertas exclusivas, nuestras últimas entregas, reposiciones y más!"</p>
                    <div className="formulario2">
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                        <div type="email" name="correo" id="correo" placeholder="Email" />
                    </div>
                    <input className="boton-enviar" type="submit" value="ENVIAR" />
                    <div className="contacto3">
                        <h3>Contacto</h3>
                        <p>01166059444</p>
                        <p>consultas.shark@gmail.com</p>
                        <p>Moron 4756, Floresta, CABA, Argentina.</p>
                    </div>
                </div>
            </footer>
            <div className="final">
                <h3>Copyright +Shark - 2023. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos ingrese aquí</h3>
            </div>
        </>
    )
}

export default Footer