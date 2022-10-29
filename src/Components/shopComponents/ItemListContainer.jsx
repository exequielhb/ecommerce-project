import {db} from '../../firebase/firebase'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import {useState, useEffect} from 'react'

console.log("soy la db",db);

export const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const productsCollection = collection(db, "products")

  const getProducts = async () => {
    const productsSnapshot = await getDocs(productsCollection)
    const productsList = productsSnapshot.docs.map(doc => doc.data())
    setProducts(productsList)
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div>
      <h1>products</h1>
     {products.map(product => {
        return <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.stock}</p>
          <p>{product.id}</p>
          </>
     })}
    </div>
  )

  // const [items, setItems] = useState([])

  // const productCollection = collection(db, "shop")
 
  // const getItems = async () => {
  //      const dataitems = await getDocs(productCollection);
  //      setItems(dataitems.docs.map(doc => ({...doc.data(), id: doc.id})))
  // }
 
  //  useEffect(() => {
  //      getItems()
  //  }, [])

  // return (
  //   <div>
  //     <h1>Lista de productos</h1>
  //     {items.map(item => {
  //       return <>
  //       <ItemList
  //         key={item.id}
  //         id={item.id}
  //         title={item.title}
  //         stock={item.stock}
  //         description={item.description}
  //        />
  //       </>
  //     })}
  //   </div>
  // )
}
