import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

//FALTA AGREGAR EL GETPRODUCTO BY CATEGORY - MIRAR CLASE DE RUTEO

const ItemListContainer = ({ saludo }) => {

    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId

            ? query(collection(db, 'productos'), where ('Category', '==', categoryId))
       : collection(db, 'productos')


getDocs(collectionRef).then(response => {
    console.log(response)


    const ProductosAdaptados = response.docs.map(doc => {

        const data = doc.data()

        return { id: doc.id, ...data }

    })

    setProducts(ProductosAdaptados)
}).finally(() => {
    setLoading(false)

})

}, [categoryId])

console.log(productos)

if (loading) {

    return <h1>Cargando...</h1>
}

return (

    <div>

        <h1>{`${saludo} ${categoryId || ''}`} </h1>

        <ItemList productos={productos} />


    </div>

)
}

export default ItemListContainer