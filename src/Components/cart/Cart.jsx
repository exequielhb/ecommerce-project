
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/authContext/cartContext"

export const Cart = () => {
  const cartRef = useRef()

  const { totalQuantity, totalPrice, cartItems, setshowCart } = useCartContext()
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
          {cartItems.length >= 1 && cartItems.map((item, index) => {
            return (
              <div className="product" key={item.id}>
                <img src={item.pictureUrl} alt={item.title} />
                <div className="product-info">
                  <h4>{item.title}</h4>
                  <h5>${item.price}</h5>
                  <button className="remove-btn">remove</button>
                </div>
              </div>
            )
          })}
  </div>
  {cartItems.length >= 1 && (
    <div>
      <div className="cart-total">
        <h3>Subtotal <span>${totalPrice}</span></h3>
      </div>
    </div>)}

  </div>
  </div>
  )
}
