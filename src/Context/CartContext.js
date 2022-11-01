
import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  // Función para que no se agregue dos veces el mismo productos e interfiera en el ID

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
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

  useEffect(() => {
    const totalQuantity = getTotalQuantity()
    setTotalQuantity(totalQuantity)
  }, [cart])

  // Función para que el total de la compra se refleje en el CardWidget

  useEffect(() => {
    const total = getTotal()
    setTotal(total)
  }, [cart])

  const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
      totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const getProductQuantity = (id) => {

    const product = cart.find(prod => prod.id === id)

    return product?.quantity
  }

  const getTotal = () => {

    let accu = 0

    cart.forEach(prod => {

      accu += prod.quantity * prod.Precio
    })

    return accu
  }

  const clearCart = () => {

    setCart([])
  }


  return (
    <CartContext.Provider value={{
      cart, addItem, removeItem, getProductQuantity, getTotalQuantity,
      totalQuantity, total, clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}