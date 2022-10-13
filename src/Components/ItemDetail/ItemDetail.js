// OBTENER UN VALOR Y LUEGO HACER ALGO CON ESE VALOR
// Agrega los productos al carrito - Function onAdd

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, budin, sabor, descripción, ingredientes, precio, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, budin, precio, quantity
        }

        addItem(productToAdd)
    }

    return (

        <div>
            <h1>Detalle del producto</h1>
            <div>

                <h1 className='tituloDetalle'>{budin}</h1>
                <h4 className='titulosDetalle'>Sabor:</h4>
                <p className='subtituloDetalle'>{sabor}</p>
                <h4 className='titulosDetalle'>Descripción:</h4>
                <p className='descripcionDetalle'> {descripción}</p>
                <h4 className='titulosDetalle'>Ingredientes:</h4>
                <p className='ingredientesDetalle'>{ingredientes}</p>
                <h4 className='titulosDetalle'>Precio</h4>
                <p className='precioDetalle'>${precio}</p>

                <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
                </footer>


            </div>
        </div>
    )

}

export default ItemDetail
