// OBTENER UN VALOR Y LUEGO HACER ALGO CON ESE VALOR
// Agrega los productos al carrito - Function onAdd

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, Imagen, Budin, Sabor, Descripcion, Ingredientes, Precio, Stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, Budin, Precio, quantity
        }

        addItem(productToAdd)
    }

    return (

        <div>
              <h1 className='tituloDetalle'>{Budin}</h1>

            <section className='contenedorDetalle'>

            <picture>
            <img className='imgDetalle' src={Imagen} alt='' />
            </picture>
           
            <div className='infoDetalle'>

                <h4 className='titulosDetalle'>Sabor:</h4>
                <p className='subtituloDetalle'>{Sabor}</p>
                <h4 className='titulosDetalle'>Descripción:</h4>
                <p className='descripcionDetalle'> {Descripcion}</p>
                <h4 className='titulosDetalle'>Ingredientes:</h4>
                <p className='ingredientesDetalle'>{Ingredientes}</p>
                <h4 className='titulosDetalle'>Precio</h4>
                <p className='precioDetalle'>${Precio}</p>

                <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={Stock} />
                        ) : (
                            <Link className='btnFinalizar' to='/cart'>Finalizar compra</Link>
                        )
                    }
                </footer>


            </div>
            </section>
        </div>
    )

}

export default ItemDetail
