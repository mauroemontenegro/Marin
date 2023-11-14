
import React, { useState } from 'react'

const ItemCount = ( {contador, resta, suma, buyProducts} )  => {
   
   return (
      <div className='cantidades'>
         <button onClick={suma}>+</button>
         <p>{contador}</p>
         <button onClick={resta}>-</button>
         <button onClick={buyProducts} className="boton-cart">AGREGAR AL CARRITO</button>
      </div>

   )
}

export default ItemCount