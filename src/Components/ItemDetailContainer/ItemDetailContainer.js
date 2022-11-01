import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase'

// GET PRODUCT BY ID

const ItemDetailContainer = ({ setCart }) => {

    const [producto, setProduct] = useState({})

    const { ProductoId } = useParams()

    useEffect(() => {

        const docRef = doc (db, 'productos' , ProductoId)

        getDoc(docRef).then(doc => {

            const data = doc.data()

            const productoAdaptado = {id: doc.id, ...data}

            setProduct(productoAdaptado)

})

    }, [ProductoId])


    return ( 

        <div>
            <ItemDetail {...producto} setCart={setCart} />
        </div>
    )


}

export default ItemDetailContainer