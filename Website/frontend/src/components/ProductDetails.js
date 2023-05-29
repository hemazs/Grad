
const ProductDetails = ({ product }) => {
    const allergens = product.allergens.join(", ");

    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Allergens: {allergens}</p>
        </div>
    );
};

export default ProductDetails;
