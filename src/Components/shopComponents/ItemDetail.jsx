import { Link, useParams } from "react-router-dom"


export const ItemDetail = ({product}) => {

    const { id } = useParams()



  return (
    <>
      {product.map(item => {
        return item.id === id && <div className="cardDetail" key={item.id}>
          <img src={item.pictureUrl} alt={item.title} />
          <div className="cardDetailInfo">
          <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* <p>{item.stock}</p> */}
            <p>{item.price}</p>
            <Link to={"/"}> <button style={{background: "violet"}}>Back to Home</button></Link>
          </div>
        </div>
      })}
    </>
  )


}
