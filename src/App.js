
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../src/Context/CartContext'

function App() {
  return (
    <div className="App">
  <CartContextProvider>
      <BrowserRouter>
       

          <Navbar />

        
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={'BUDINES'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer saludo={'Producto:'}/>} />
          <Route path='/detalle/:ProductoId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 

        </Routes>
      </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}


export default App;
