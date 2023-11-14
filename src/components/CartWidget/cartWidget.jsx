import React, { useContext } from "react"
import styles from './style.module.css'
import { Avatar, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Car = () => {

    const {cantidadCarrito}=useContext(CartContext);
    return (
        <>
            <div className={styles.button}>
                <Badge count={cantidadCarrito()}>
                <NavLink to={'/cart'}>
                    <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
                </NavLink>
                </Badge>
            </div>
        </>
    )
}
export default Car