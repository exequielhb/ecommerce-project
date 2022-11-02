import { useState, useEffect, useContext, createContext } from "react"


const Context = createContext()

export const CartContext = ({children}) => {

    const [showCart, setshowCart] = useState(false)
    const [cartItems, setcartItems] = useState([])
    const [totalPrice, settotalPrice] = useState(0)
    const [totalQuantity, settotalQuantity] = useState(0)
    const [qty, setqty] = useState(1)


    const onAdd = (product, quantity) => {
        const chekProductInCart = cartItems.find(item => item.id === product.id)
        settotalPrice(totalPrice + product.price * quantity)
        settotalQuantity(totalQuantity + quantity)

        if (chekProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) =>{
                if(cartProduct.id === product.id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setcartItems(updatedCartItems)
            
        } else {
            product.quantity = quantity
            setcartItems([...cartItems, {...product}])
        }
        alert("Product added to cart")
        // and clear the quantity
        setqty(1)
        
    }

    const onRemove = (product) => {
        const updatedCartItems = cartItems.filter(item => item.id !== product.id)
        settotalPrice(totalPrice - product.price * product.quantity)
        settotalQuantity(totalQuantity - product.quantity)
        setcartItems(updatedCartItems)

    }


    const clearCart = () => {
        setcartItems([])
        settotalPrice(0)
        settotalQuantity(0)
    }


    // -------------------------------------------
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
        setshowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        inQty,
        deQty,
        onAdd,
        onRemove,
        clearCart
    }}>
        {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)