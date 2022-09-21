
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        
      </header>
<ItemListContainer saludo = {'Bienvenidos a Delfos Cocina'}/>
      
    </div>
  );
}

export default App;
