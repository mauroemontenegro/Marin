import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


let local = [];

try {
  const localData = localStorage.getItem("carrito");
  console.log("Local data from localStorage:", localData);

  if (localData) {
    local = JSON.parse(localData);
  }
} catch (error) {
  console.error("Error parsing local storage data:", error);
}



export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(local);

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

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.contador, 0);
  }

  const priceTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
  }
  const vaciarCarrito = () => {
    setCarrito([]);
  }
  const deleteProd = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    const newCart = carrito.filter((element) => element !== foundId);
    setCarrito(newCart);
  };
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito])


  return (
    <CartContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, priceTotal, vaciarCarrito, deleteProd }}>
      {children}
    </CartContext.Provider>
  )
}