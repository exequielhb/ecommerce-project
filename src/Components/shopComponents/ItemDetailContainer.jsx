
import { db } from "../../firebase/firebase"
import { collection, getDocs, doc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])

  const productsCollection = collection(db, "products")

  const getProduct = async () => {
    const dataProduct = await getDocs(productsCollection)
    setProduct(
      dataProduct.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
    )
  }


  useEffect(() => {
    getProduct()
  }, [])


  return (
    <div className="productDetailContainer">
      <ItemDetail product={product} />
    </div>

  )
}
