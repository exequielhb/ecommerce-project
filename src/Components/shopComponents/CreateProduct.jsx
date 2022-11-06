import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { collection, addDoc } from "firebase/firestore"


export const CreateProduct = () => {

  
  const [product, setProduct] = useState({
    title: "",
    description: "",
    stock: "",
    price: "",
    pictureUrl: "",
    category: "",

  })

  const navigate = useNavigate()

  const productsCollection = collection(db, "products")

  const addProduct = async () => {
    try {
      await addDoc(productsCollection, product)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct()
  }


  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })

  }


  // trim removes whitespace and input validation
  const isDisabled = Object.values(product).some((x) => x.trim().length === 0)




  return (
    <div>

      <h1>Crear Producto</h1>
      
      <form onSubmit={handleSubmit}>

        <input
          value={product.title}
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          maxLength="35"

          minLength={10}
          required

        />


        <input
          value={product.description}
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          maxLength="50"

          minLength={10}
          required
          max={100}
        />

        <input

          value={product.stock}
          type="number"
          name="stock"
          placeholder="stock"
          onChange={handleChange}

          minLength={1}
          maxLength={100}
          required

        />

        <input
          value={product.price}
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}

          minLength={1}
          maxLength={10000}
          required
        />

        <input
          value={product.pictureUrl}
          type="text"
          name="pictureUrl"
          placeholder="pictureUrl"
          onChange={handleChange}
        />

        <h3>Category:</h3>
        <select name="category" id="category" 
        onChange={handleChange}
        required
        value={product.category}
        >
          <option >Home & Garden</option>
          <option >Appareal & Accessories</option>
          <option >Sporting</option>
          <option >Health & Beauty</option>
          <option >Pets</option>
          <option >Consumer electronics</option>
          <option >Others</option>
        </select>

        <button>Create Product</button>
      </form>
      

    </div>
  )

}