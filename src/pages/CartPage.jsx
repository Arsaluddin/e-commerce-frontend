import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CartPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch the product details based on productId
    axios.get(`/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [productId]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    // Make a request to add the product to cart with the selected quantity
    const userId = 'user_id_placeholder'; // Replace with actual user ID
    axios.post('/cart/add', { userId, productId, quantity })
      .then(response => {
        console.log(response.data.message);
        // Redirect to the cart page
        window.location.href = '/cart';
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="mb-4">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <label className="block text-sm font-medium mb-1">Quantity</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded shadow-sm focus:ring focus:ring-opacity-50"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CartPage;
