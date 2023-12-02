
import React, { useState } from 'react'

const ItemCount = ( {contador, resta, suma, buyProducts} )  => {
   
   return (
      <div className='detalle-prod'>
      <div className='cantidades'>
         <button onClick={suma}>+</button>
         <p>{contador}</p>
         <button onClick={resta}>-</button>
      </div>
         <button onClick={buyProducts} className="boton-cart">AGREGAR AL CARRITO</button>
      </div>

   )
}

export default ItemCount