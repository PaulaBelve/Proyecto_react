import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartItem = ({ id, Budin, Precio, quantity }) => {

    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {

        removeItem(id)
    }

    return (

        <section className='contenedorCartItem'>

            <h1 className='resumenCompra'>Resumen de compra</h1>
            <div>
                <h2 className='tituloResumen'> Budin: {Budin}</h2>
            </div>

            <div>
                <p className='infoResumen'>Cantidad: {quantity}</p>

                <p className='infoResumen'>Precio x unidad ${Precio}</p>
            </div>
            <div>
                <p className='infoResumen'>Subtotal: ${Precio * quantity}</p>
            </div>

            <button className='btnResumen' onClick={() => handleRemove(id)}>Eliminar</button>

        </section>

    )
}

export default CartItem