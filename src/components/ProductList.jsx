// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';



const sampleProducts = [
    { _id: '1', title: 'Product 1', price: 199.99, description: 'Description 1' },
    { _id: '2', title: 'Product 2', price: 299.99, description: 'Description 2' },
    { _id: '3', title: 'Product 3', price: 149.99, description: 'Description 3' },
    // Add more sample products as needed
  ];

function ProductList({ categoryId }) {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        const response = await axios.get(`http://localhost:5000/products/category/${categoryId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    }

    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} >
          {/* <h3 className="font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p>{product.description}</p> */}
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
