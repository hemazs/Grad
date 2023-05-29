import { useEffect, useState } from 'react';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();

                if (res.ok) {
                    setProducts(data.products);
                } else {
                    console.log('Failed to fetch products:', data);
                }
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home">
            <div className="products">
                {products && products?.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div> 
        </div>
    );
};

export default Home;
