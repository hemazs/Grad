import { useEffect, useState } from 'react';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
    const { _id } = useParams();
    const [products, setProducts] = useState([]);
    const [student, setStudent] = useState([]);

  const fetchStudent = async () => {
    try {
        fetch(`/api/students/${_id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setStudent(data.student);
        }
        );
    } catch (error) {
        console.log('Error fetching student:', error);
    }
};
useEffect(() => {
    fetchStudent();
}, [_id]);

  const fetchProducts = async () => {
    try {
        fetch('/api/products')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data.products);
        }
        );
    } catch (error) {
        console.log('Error fetching products:', error);
    }
};

useEffect(() => {
    fetchProducts();
}, [setProducts]);

const filteredProducts = products.filter((product) => {
    if (student && student.allergies) {
      return product.allergens.every((allergen) => !student.allergies.includes(allergen));
    }
    return true;
  });

    return (
        <div className="products">
            {filteredProducts && filteredProducts?.map((product) => (
                <ProductDetails key={product._id} product={product} />
            ))}
        </div>
    );


};

export default ProductsPage;
