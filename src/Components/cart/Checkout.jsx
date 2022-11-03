import React from 'react'
import { useCartContext } from "../../context/authContext/cartContext"
import { Link } from 'react-router-dom'


export const Checkout = () => {

    const { cartItems, totalPrice } = useCartContext()



  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length < 1 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/" className="btn">
          <button className="checkout-btn">Continue Shopping</button>
          </Link>

        </div>
      ) : (
        <div className="checkout-container">
        <div className="checkout-left">
          <div className="checkout-product">
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
                </div>
              )})}


    </div>
    </div>
    <div className="checkout-right">
      <div className="checkout-info">
        <h3>Order Summary</h3>
        <div className="checkout-price">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
        </div>
        <div className="checkout-price">
          <span>Shipping paid by Elon. M</span>
        </div>
        <div className="checkout-price">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
        <Link to="/purchaseForm">
        <button className="checkout-btn">take my money</button>
        </Link>
      </div>
    </div>
    </div>
      )}
      
    </div>
  )
}
