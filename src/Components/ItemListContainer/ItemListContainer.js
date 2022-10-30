import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getProductos } from '../../services/firebase/firestore'

//FALTA AGREGAR EL GETPRODUCTO BY CATEGORY - MIRAR CLASE DE RUTEO

const ItemListContainer = ({ saludo }) => {

    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        getProductos(categoryId).then(productos => {
            setProducts(productos)
        }).catch(error =>
            console.log(error)).finally(() => setLoading(false))


}, [categoryId])

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