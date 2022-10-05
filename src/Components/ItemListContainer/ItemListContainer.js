import { useState, useEffect } from "react"
import { getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams} from "react-router-dom"





const ItemListContainer = ({saludo}) => {

    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams ()

    useEffect(() => {
        
        setLoading(true)
        
        getProducts(categoryId).then(productos => {

        setProducts(productos)

        }).finally(() => {

            setLoading(false)
        })

}, [categoryId])

console.log(productos)

if(loading) {

    return <h1>Loading...</h1>
}

    return (
        
        <div>
    
    <h1>{saludo}</h1>

    <ItemList productos={productos}/>

  
    </div>
   
  )
}



export default ItemListContainer