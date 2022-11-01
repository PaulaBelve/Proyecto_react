import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Formulario from '../Formulario/Formulario'
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import { NotificationContext } from '../../Notification/Notification'

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const crearOrden = async (Usuario) => {

        setLoading(true)

        try {
            const objOrder = {

                   Usuario,
                   Items: cart,
                   total
            }

            console.log(objOrder)

            const ids = cart.map(prod => prod.id)
            const productosRef = collection(db, 'productos')

            const productosAdaptadosFromFirestore = await getDocs(query(productosRef, where(documentId(), 'in', ids)))
            const { docs } = productosAdaptadosFromFirestore

            const batch = writeBatch(db)
            const outOffStock = []

            docs.forEach(doc => {

                const dataDoc = doc.data()
                const stockDb = dataDoc.Stock

                const productAddToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddToCart?.quantity

                if (stockDb >= prodQuantity) {

                    batch.update(doc.ref, { Stock: stockDb - prodQuantity })
                } else {

                    outOffStock.push({ id: doc.id, ...dataDoc })

                }
            })

            if (outOffStock.length === 0) {

                await batch.commit()

                const orderRef = collection(db, 'order')
                const orderAdded = await addDoc(orderRef, objOrder)
                setNotification('success', `Su orden ha sido procesada, muchas gracias por elegirnos!`)
                console.log(`el id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                setNotification('error', `el producto esta temporalmente sin stock`)
                console.log('hay productos fuera de stock')

            }

        } catch (error) {

            setNotification('error', 'Ha ocurrido un error!')

            console.log('error')



        } finally { setLoading(false) }

    }

    if (loading) {
        return <h1 className="loadingCheck">Su orden esta siendo procesada...</h1>
    }

    return (
        <>
            <h1 className="tituloCheck"> Formulario de confirmación </h1>
            <Formulario order={crearOrden}></Formulario>
            

        </>


    )
}


export default Checkout
