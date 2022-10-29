


export const Item = ({ product, deleteProduct }) => {

  const removeProduct = () => {
    deleteProduct(product.id)
  }
  
  return (
    
    <>
      <h2>{product.title}</h2>
      <img src={product.pictureUrl} alt="product" />
      <p>{product.description}</p>
      {/* <p>{product.id}</p> */}
      <p>in stock: {product.stock}</p>
      <p>Price: ${product.price}</p>
      <button style={{background: "red"}} onClick={removeProduct}>Delete</button>
    </>
  )
}
