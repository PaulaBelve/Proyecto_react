
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       

          <Navbar />

        
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={'BUDINES'} />} />
          <Route path='/category/:categoryId'  element={<ItemListContainer saludo={'PRODUCTOS'}/>}/>
          <Route path='/detalle/:ProductoId' element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
