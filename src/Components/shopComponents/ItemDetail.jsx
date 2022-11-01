import { Link, useParams } from "react-router-dom"
import { useCartContext } from "../../context/authContext/cartContext"


export const ItemDetail = ({product}) => {

    const { id } = useParams()

    // -------------------------------------------
    const { qty, inQty, deQty } = useCartContext()

    const handleStock = () => {
        if(qty > product.stock) {
            return <p className="text-danger">Stock insuficiente</p>
        } else {
            return <p className="text-success">Stock disponible</p>
        }
    }

    const handleAdd = () => {
        if(qty > product.stock) {
            return <button className="btn btn-danger" disabled>Agregar al carrito</button>
        } else {
            return <button className="btn btn-success">Agregar al carrito</button>
        }
    }




  return (
    <>
      {product.map(item => {
        return item.id === id && <div className="cardDetail" key={item.id}>
          <img src={item.pictureUrl} alt={item.title} />
          <div className="cardDetailInfo">
          <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>stock: {item.stock}</p>
            <p>{item.price}</p>
            <Link to={"/"}> <button style={{background: "violet"}}>Back to Home</button></Link>

            {/* ------------------------------------------------------------------------------- */}
            {/* qty from stock */}

            <div className="qty">
                <button onClick={deQty}>-</button>
                <p>{qty}</p>
                <button onClick={inQty}>+</button>
            </div>

            {handleStock()}
            {handleAdd()}
            


            {/* <div className="qty">
              <button onClick={() => deQty(item.stock)}>-</button>
              <p>{qty}</p>
              <button onClick={() => inQty(item.stock)}>+</button>
            </div> */}

            <Link to={"/cart"}> <button style={{background: "#ff8906"}}>Add to Cart</button></Link>
            <Link to={"/cart"}> <button style={{background: "#e53170"}}>Buy Now</button></Link>
          </div>
        </div>
      })}
    </>
  )


}
