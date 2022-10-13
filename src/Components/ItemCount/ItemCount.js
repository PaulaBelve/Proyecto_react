import './ItemCount.css'
import {useState} from 'react'


const ItemCount = ({stock = 0, inicio = 1, onAdd }) => {
const [quantity, setQuantity] = useState(inicio)

const restar = () => {
if (quantity > 1)
    setQuantity (quantity - 1) 
}

const sumar = () => {

    if (quantity < stock)

   setQuantity (quantity + 1 ) 

}

return (
    <div className='contador'>
<h1 className='numero'>{quantity}</h1>
<button className='btnContador' onClick={restar}>-</button>
<button className='btnContador' onClick={sumar}>+</button>

<div>
<button className='btn-AgregarCarrito' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
</div>
    </div>
)
}

export default ItemCount