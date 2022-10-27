
import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   // const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    // Función para que no se agregue dos veces el mismo productos e interfiera en el ID

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          console.log('ya esta agregado')
        }
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }

      // Función para eliminar productos del carrito
    
      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

   /*   useEffect(() => {
       const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart]) */

      // Función para que el total de la compra se refleje en el CardWidget

      const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}