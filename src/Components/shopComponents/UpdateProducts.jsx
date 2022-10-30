
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
        pictureUrl: ""
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


  return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={products.title} onChange={handleChange} />
            <input type="text" name="description" value={products.description} onChange={handleChange} />
            <input type="number" name="stock" value={products.stock} onChange={handleChange} />
            <input type="number" name="price" value={products.price} onChange={handleChange} />
            <input type="text" name="pictureUrl" value={products.pictureUrl} onChange={handleChange} />
            <button>Update</button>
        </form>

    </div>
  )
}
