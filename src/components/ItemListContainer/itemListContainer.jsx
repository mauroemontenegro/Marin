import React from "react"
import styles from './list.module.css'
import Categories from "../Categorias/Categories";
// import ItemList from "../ItemList/ItemList";
import inicio from "../../imagenes/inico2.webp"
// import OfertasList from "../OfertaList/OfertasList";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greting }) => {
    

    return (
        <>
        <img className="img-inicio" src={inicio} alt="" />
            <h3 className="titulo-prod">PRODUCTOS DESTACADOS</h3>
            <div className="categorias">
                <h3>CATEGORIAS:</h3>
            <Categories />
            </div>
            <div className="contenedor">
                {/* <OfertasList /> */}
                <ItemList/>
            </div>
        </>
    )
}
export default ItemListContainer