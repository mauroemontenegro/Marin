import {  createContext, useEffect, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (data, contador) => {
      const itemAgregado = { ...data, contador }
      const nuevoCarrito = [...carrito];
      const integrado = nuevoCarrito.find((productos) => productos.id === itemAgregado.id)
      
      if (integrado) {
        integrado.contador += contador;
      } else {
        nuevoCarrito.push(itemAgregado);
      };
      setCarrito(nuevoCarrito)
      console.log(nuevoCarrito)
    }
  
    const cantidadCarrito =()=>{
      return carrito.reduce((acc , prod)=>acc + prod.contador, 0);
    }
  
    const priceTotal =()=>{
      return carrito.reduce((acc, prod)=> acc + prod.price * prod.contador, 0)
    }
    const vaciarCarrito = () => {
      setCarrito([]);
    }
    const deleteProd = (id) => {
        const foundId = carrito.find((element) => element.id === id);
    
        const newCart = carrito.filter((element) => element !== foundId);
        setCarrito(newCart);
    };
    
    
    return(
        <CartContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, priceTotal,vaciarCarrito ,deleteProd }}>
            {children}
        </CartContext.Provider>
    )
}