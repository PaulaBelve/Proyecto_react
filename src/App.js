
import './App.css';
import Inicio from './Components/Inicio/Inicio';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../src/Context/CartContext'
import { NotificationProvider } from './Notification/Notification';

function App() {
  return (
    <div className="App">
       <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>


          <Navbar />

          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer saludo={'Productos:'} />} />
            <Route path='/detalle/:ProductoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      </NotificationProvider>

    </div>
  );
}


export default App;

//{<ItemListContainer saludo={'BUDINES'} />} 
