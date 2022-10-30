import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '.'


export const getProductos = (categoryId) => {

    return new Promise ((resolve, reject) => {
        const collectionRef = categoryId

            ? query(collection(db, 'productos'), where('Category', '==', categoryId))
            : collection(db, 'productos')


        getDocs(collectionRef).then(response => {
            console.log(response)


            const ProductosAdaptados = response.docs.map(doc => {

                const data = doc.data()

                return { id: doc.id, ...data }

            })

            resolve(ProductosAdaptados)
        }).catch(error => {
            reject(error)

        })

    })

}

//export const getProductosById = (productoId) => {}

//export const createOrder = () => {}

