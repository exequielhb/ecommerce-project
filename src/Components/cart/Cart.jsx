
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
            <button className="checkout-btn">Continue Shopping</button>
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
          })}
  </div>


  
  {cartItems.length >= 1 && (
    <div className="cart-footer">
      <h3>
        your total : <span>${totalPrice}</span>
      </h3>
      <button className="checkout-btn">
        <Link to="/checkout">
          checkout
        </Link>
        </button>
        <Link to="/">
        <button className="checkout-btn">Continue Shopping</button>
        </Link>
      <button className="clear-cart banner-btn" onClick={clearCart}>clear cart</button>
    </div>
  )}
  
  </div>

  </div>
  )
}
