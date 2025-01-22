
const ProductItem = ({product, card, setCard}) => {

    const findProduct = card.find((item) => item.id === product.id)
    const addToCard = (product) => {
        // setCard([...card, product])
        setCard((prevState) => [...prevState, product])

    } 

    return (
        <div>
            <div className="border p-4 m-2 rounded-lg shadow-lg">
                <img className="w-full h-48 object-cover rounded-t-lg"
                    src={product.image}
                    alt="product-image" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-500 my-2">{product.price} TL</p>
                    <button className={`bg-blue-500 text-white rounded hover:bg-blue-600 w-full px-4 py-[8px] ${findProduct && "opacity-50  cursor-no-drop"}`} 
                    disabled={findProduct}
                    onClick={() => addToCard(product)}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
