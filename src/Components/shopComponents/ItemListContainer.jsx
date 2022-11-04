import {db} from '../../firebase/firebase'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import { ItemList } from './ItemList';


// console.log("soy la db",db);

export const ItemListContainer = () => {

  const [products, setProducts] = useState([])


  const productsCollection = collection(db, "products")

  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection)
    setProducts(
      dataProducts.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
    )
  }
  // ------------------------------

  const deleteProduct = async (id) => {
    try{
      await deleteDoc(doc(db, "products", id))
      alert("Product deleted")
    } catch(error) {
      console.log(error)
    }
    getProducts()
  }

  // ------------------------------------



  useEffect(() => {
    getProducts()

  }, [])

  // ------------------------------



  return <>
  <h1>Productos</h1>
  <div className='container'>
    {products.length === 0 ? <div className='spinner'></div> : products.map(product => 
    <div className='card' key={product.id}>
    <ItemList product={product} deleteProduct={deleteProduct}  />
    </div>
    )
    }
  </div>
    
    </>
  
}
