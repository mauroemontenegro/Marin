
import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {  CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'





function App() {
 

  return (

  <div>
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:id' element={<ItemListContainer />} />
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Carrito/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  </div>
   
  )
}

export default App
