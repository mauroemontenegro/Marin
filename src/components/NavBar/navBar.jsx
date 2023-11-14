import React from "react"
import styles from './navBar.module.css'
import Car from "../CartWidget/cartWidget.jsx"
import logo from "../../imagenes/logo.jpg"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav>
                <div className={styles.logo}>
                    <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
                    <NavLink to={'/'}><h3>MARIN</h3></NavLink>
                    <div className={styles.navegacion}>
                        <ul>
                            <li><a href="./">INICO</a></li>
                            <li><a href="">PRODUCTOS</a></li>
                            <li><a href="">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
                <Car />
            </nav>
        </>
    )
}

export default NavBar