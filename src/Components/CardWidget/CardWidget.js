import { useContext } from 'react'
import cart from './Assets/cart.png'
import { CartContext } from '../../Context/CartContext'


const CardWidget = () => {

    const {getTotalQuantity} = useContext (CartContext)

   const totalQuantity = getTotalQuantity ()

    return (

    <div>
    <img src={cart} alt= 'cart' className="carrito"/>
        {totalQuantity}
    </div>

    )
}

export default CardWidget