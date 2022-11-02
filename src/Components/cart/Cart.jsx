
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/authContext/cartContext"

export const Cart = () => {
  const cartRef = useRef()

  const { totalQuantity, totalPrice, cartItems, setshowCart, onRemove, clearCart } = useCartContext()
  return (
    <div className="cart" ref={cartRef}>
      <div className="cart-container">
        <button className="close-cart" onClick={() => setshowCart(false)}>X
        <span>Your cart</span>
        <span>({totalQuantity} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/" className="btn">
              fill it
            </Link>
          </div>
        )}

        <div className="product-content">
          {cartItems.length >= 1 && cartItems.map((item) => {
            const { id, name, price, quantity } = item
            return (
              <div className="product" key={id}>
                <div className="product-image">
                  <img src={item.pictureUrl} alt={name} />
                </div>
                <div className="product-details">
                  <h4>{name}</h4>
                  <div className="product-price">
                    <span>${price}</span>
                    <span className="quantity">x {quantity}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="remove" onClick={() => onRemove(item)}>X</button>
                </div>
              </div>
            )
            // return (
            //   <div className="product" key={item.id}>
            //     <img src={item.pictureUrl} alt={item.title} />
            //     <div className="product-info">
            //       <h4>{item.title}</h4>
            //       <h5>${item.price}</h5>
            //       <span className="remove-item" onClick={() => onRemove(item)}>remove</span>
            //   </div>
            //   <div className="qty">
            //     <button className="quantity-btn" onClick={() => toggleItemQuantity(item.id, "dec")}>-</button>
            //     <p className="quantity-number">{item.quantity}</p>
            //     <button className="quantity-btn" onClick={() => toggleItemQuantity(item.id, "inc")}>+</button>
            //   </div>
            // </div>
            // )
          })}
  </div>
  
  {cartItems.length >= 1 && (
    <div className="cart-footer">
      <h3>
        your total : <span>${totalPrice}</span>
      </h3>
      <button className="checkout-btn">checkout</button>
      <button className="clear-cart banner-btn" onClick={clearCart}>clear cart</button>
    </div>
  )}
  </div>
  </div>
  )
}
