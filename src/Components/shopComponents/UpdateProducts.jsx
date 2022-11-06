
import { useState, useEffect } from "react"
import { db } from "../../firebase/firebase"
import { useParams, useNavigate } from "react-router-dom"
import {doc, updateDoc, getDoc} from "firebase/firestore"

export const UpdateProducts = () => {

    const [products, setProducts] = useState({
        title: "",
        description: "",
        stock: "",
        price: "",
        pictureUrl: "",
        category: "",
    })

    const { id } = useParams()
    const navigate = useNavigate()

    const getProduct = async () => {
        try {
            const docRef = doc(db, "products", id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setProducts(docSnap.data())
            } else {
                console.log("No such document!")
            }
        } catch (error) {
            console.log("Error getting document:", error)
        }

    }

    const handleChange = (e) => {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, "products", id)
            await updateDoc(docRef, products)
            alert("Product updated")
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const isDisabled = Object.values(products).some((x) => x.trim().length === 0)


  return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={products.title} onChange={handleChange} maxLength="35" required />
            
            <input type="text" name="description" value={products.description} onChange={handleChange} maxLength="50" required />

            <input type="number" name="stock" value={products.stock} onChange={handleChange} required />

            <input type="number" name="price" value={products.price} onChange={handleChange} required />

            <input type="text" name="pictureUrl" value={products.pictureUrl} onChange={handleChange} placeholder="your image" />

            <h3>Category:</h3>
            <select name="category" value={products.category} onChange={handleChange} required>
                <option >Home & Garden</option>
                <option >Appareal & Accessories</option>
                <option >Sporting</option>
                <option >Health & Beauty</option>
                <option >Pets</option>
                <option >Consumer electronics</option>
                <option >Others</option>
            </select>


            <button disabled={isDisabled}>Update Product</button>
        </form>

    </div>
  )
}
