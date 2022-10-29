import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const crearOrden = async () => {

        setLoading(true)

        try {
            const objOrder = {

                Usuario: {

                    name: "Paula",
                    apellido: "Belvedere",
                    número: "dkfnhrjvk",
                    email: "pau.belve@gmail.com"
                },

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

                console.log(`el id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('hay productos fuera de stock')

            }

        } catch (error) {

            console.log('error')



        } finally { setLoading(false) }

    }

    if (loading) {
        return <h1>Su orden esta siendo procesada...</h1>
    }

    return (
        <>
            <h1> Formulario de confirmación </h1>
            <button onClick={crearOrden}>Confirmar</button>

        </>


    )
}


export default Checkout
