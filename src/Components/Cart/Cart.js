import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import  CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalQuantity, total, clearCart,} = useContext (CartContext)

    if (totalQuantity === 0 ) {

        return (
            <h2>No hay productos en el carrito</h2> )
        
    }

    return (

        <section>
            <h1>Cart</h1>
            { cart.map( p => <CartItem key={p.id} {...p}/>) }
            <p>Total: ${total}</p>
            <button onClick={() => clearCart ()} className='btnEliminarCarrito'>Limpiar carrito</button> 
         
            <Link to='/checkout' className='checkout'>Checkout</Link>



        </section>
    )
}

  



export default Cart
