import ProductItem from "./ProductItem"
import productData from "../productData"

const Product = (props) => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
        {productData.map((product) => (
        <ProductItem key={product.id} product={product} card={props.card} setCard={props.setCard}/>
        ))}
    </div>
  )
}

export default Product
