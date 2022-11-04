
import { Link } from "react-router-dom"
import {AiFillHeart} from "react-icons/ai"

import { useCartContext } from "../../context/authContext/cartContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemList = ({ product, deleteProduct }) => {

  const {myFavorite, setmyFavorite} = useCartContext()

  const removeProduct = () => {
    deleteProduct(product.id)
  }

  const addFavorite = (id) => {
    setmyFavorite([...myFavorite, product])
    if(myFavorite.includes(product)){
      console.log("ya lo tengo")
    }

  }

  const removeFavorite = (id) => {
    setmyFavorite(myFavorite.filter((fav) => fav.id !== id))
  }

  const toggleFavorite = (id) => {
    const product = myFavorite.find(product => product.id === id)

    if(product) {
      removeFavorite(id)
      toast.error("Product removed from favorites")

    } else {
      addFavorite(id)
      toast.success("Product added to favorites")
    
    }


  }

  const handleFav = () => {
    toggleFavorite(product.id)

  }

  
  return (
    
    <>
      {/* <h2>{product.title}</h2> */}
      <h2>{product.title}</h2>
      <img src={product.pictureUrl} alt="product" />
      <p>{product.description}</p>
      {/* <p>{product.id}</p> */}
      <p>in stock: {product.stock}</p>
      <p>Price: ${product.price}</p>
      <button style={{background: "red"}} onClick={removeProduct}>Delete</button>
      <Link to={`/update/${product.id}`}><button style={{background: "green"}}>Update</button></Link>
      <Link to={`/products/${product.id}`}><button style={{background: "blue"}}>Detail</button></Link>

      <button onClick={handleFav}>
        <AiFillHeart style={{color: myFavorite.includes(product) ? "red" : "white"}}/>
      </button>
      <ToastContainer />




    </>
  )
}
