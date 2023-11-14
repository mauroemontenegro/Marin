import React from "react"
import styles from './list.module.css'
import Categories from "../Categorias/Categories";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greting }) => {
    

    return (
        <>
            <h3 className="titulo-prod">PRODUCTOS DESTACADOS</h3>
            <div className="categorias">
                <h3>CATEGORIAS:</h3>
            <Categories />
            </div>
            <div className="contenedor">
                <ItemList/>
            </div>
        </>
    )
}
export default ItemListContainer