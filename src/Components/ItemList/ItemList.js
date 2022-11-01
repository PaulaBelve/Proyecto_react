import './ItemList.css' ;
import Item from '../Item/Item';


const ItemList = ({productos}) => {

    return (

        <div>
          <ul className='estilosCart'>

        {   productos.map(prod => (

          <Item key={prod.id} prod={prod}/>

           
             ) ) 
      }
     </ul>
        </div>
    )
}

export default ItemList