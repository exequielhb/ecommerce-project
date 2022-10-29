import {db} from '../../firebase/firebase'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import { Item } from './Item';


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



  useEffect(() => {
    getProducts()

  }, [])

  // ------------------------------



  return <>
  <h1>Productos</h1>
  <div className='container'>
    {products.length === 0 ? <h1>Cargando...</h1> : products.map(product => 
    <div className='card' key={product.id}>
    <Item product={product} />
    </div>
    )
    }
  </div>
    
    </>
  
}
