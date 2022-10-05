import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct} from '../../asyncMock'
import {useParams} from 'react-router-dom'
import Contador from "../Counter/Counter"


const ItemDetailContainer = () => {

    const [producto, setProduct] = useState({})

    const {ProductoId} = useParams ()
    //console.log(param)
    

    useEffect(() => { getProduct(ProductoId).then(producto => {

        setProduct(producto)

        })

}, [])

console.log (producto)

    return (

        <div>
        <h1>Detalle del producto</h1>
        <div>
        
        <h1 className='tituloDetalle'>{producto.budin}</h1>
        <h4 className='titulosDetalle'>Sabor:</h4>
        <p className='subtituloDetalle'>{producto.sabor}</p>
        <h4 className='titulosDetalle'>Descripción:</h4>
        <p className='descripcionDetalle'> {producto.descripción}</p>
        <h4 className='titulosDetalle'>Ingredientes:</h4>
        <p className='ingredientesDetalle'>{producto.ingredientes}</p>
        <h4 className='titulosDetalle'>Precio</h4>
        <p className='precioDetalle'>${producto.precio}</p>
        <Contador/>
        <button className='btn-AgregarCarrito'>Agregar al carrito</button>

        </div>
        </div>
    )


}

export default ItemDetailContainer