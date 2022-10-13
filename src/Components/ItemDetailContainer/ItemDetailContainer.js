import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct} from '../../asyncMock'

import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

// GET PRODUCT BY ID



const ItemDetailContainer = ({ setCart }) => {

    const [producto, setProduct] = useState({})

    const {ProductoId} = useParams ()
    
    useEffect(() => { getProduct(ProductoId).then(producto => {

        setProduct(producto)
        console.log (producto)
        })

}, [ProductoId])



    return (

        <div>
      <ItemDetail {...producto} setCart={setCart}/>
        </div>
    )


}

export default ItemDetailContainer