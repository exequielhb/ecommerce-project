import { Link, useParams } from "react-router-dom"
import { useCartContext } from "../../context/authContext/cartContext"


export const ItemDetail = ({product}) => {



  const { id } = useParams()

    // -------------------------------------------
  const { qty, inQty, deQty, onAdd } = useCartContext()


  return (
    <>
      {product.map(item => {
        return item.id === id && <div className="cardDetail" key={item.id}>
          <img src={item.pictureUrl} alt={item.title} />
          <div className="cardDetailInfo">
          <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* <p>stock: {item.stock}</p> */}
            {item.stock > 0 ? <p>stock: {item.stock}</p> : <p>No stock</p>}

            <p>${item.price}</p>
            <Link to={"/"}> <button style={{background: "violet"}}>Back to Home</button></Link>

            {/* ------------------------------ */}
  
            <div className="qty">
              <button onClick={deQty}>-</button>
              <p>{qty}</p>
              {qty < item.stock ? <button onClick={inQty}>+</button> : <button disabled>+</button>}
            </div>

            <Link to={"/cart"}> <button onClick={() => onAdd(item, qty)}>Add to Cart</button></Link>
            
            {/* buy now */}
            <Link to={"/cart"}> <button onClick={() => onAdd(item, qty)}>Buy Now</button></Link>
          </div>
        </div>
      })}
    </>
  )


}
