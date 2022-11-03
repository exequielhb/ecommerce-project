import { useCartContext } from "../../context/authContext/cartContext"

import { db } from "../../firebase/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const PurchaseForm = () => {

  const navigate = useNavigate()
  
  const {totalPrice, cartItems, clearCart} = useCartContext()

  console.log("precion total", totalPrice);
  console.log("items", cartItems);

  const [formDetails, setFormDetails] = useState({
    payment: "",
    name: "",
    surname: "",
    cartItems: cartItems,
    totalPrice: totalPrice,
  })

  // --------------------------------------

  const formDetailsCollection = collection(db, "purchase-user")

  const addFormDetails = async () => {
    try {
      await addDoc(formDetailsCollection, formDetails)
      alert("Compra realizada con exito")
      clearCart()
      navigate("/success")
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    addFormDetails()
  }

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    })
  }

  return <>
    <h1>Form details</h1>
    <form onSubmit={handleSubmit}>
      <input
        value={formDetails.payment}
        type="text"
        name="payment"
        placeholder="payment"
        onChange={handleChange}
      />
      <input
        value={formDetails.name}
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        value={formDetails.surname}
        type="text"
        name="surname"
        placeholder="surname"
        onChange={handleChange}
      />
      {/* products */}
      <h3>your products:</h3>
      <div>
        {cartItems.map((item) => {
          return <div key={item.id}>
            <span>{item.title}</span> 
            <span> x{item.quantity}</span>
          </div>
        })}
        </div>
      
      <h3>Total to payment:</h3>
      <p>$ {totalPrice}</p>

      <button type="submit">Submit</button>
    </form>

    </>
}
