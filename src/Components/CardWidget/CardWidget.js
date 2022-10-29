import { useContext } from 'react'
import { Link } from 'react-router-dom'
import cart from './Assets/cart.png'
import { CartContext } from '../../Context/CartContext'


const CardWidget = () => {

    const {getTotalQuantity} = useContext (CartContext)

   const totalQuantity = getTotalQuantity ()

    return (

    <Link to='/cart'>
    <img src={cart} alt= 'cart' className="carrito"/>
        {totalQuantity}
    </Link>

    )
}

export default CardWidget