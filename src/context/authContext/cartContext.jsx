import { useState, useEffect, useContext, createContext } from "react"


const Context = createContext()

export const CartContext = ({children}) => {

    const [showCart, setshowCart] = useState(false)
    const [cartItems, setcartItems] = useState()
    const [totalPrice, settotalPrice] = useState()
    const [totalQuantity, settotalQuantity] = useState()
    const [qty, setqty] = useState(1)

    const inQty = () => {
        setqty(qty + 1)
    }

    const deQty = () => {
        setqty((qty) => {
            if(qty - 1 < 1) return 1
            return qty - 1
        })

    }

  return (
    <Context.Provider value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        inQty,
        deQty,
    }}>
        {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)