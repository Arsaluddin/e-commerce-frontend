import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/cart/add', {
        userId: user._id, // Get the current user's ID
        productId: product._id,
        
      });

      // Redirect to the cart page
      navigate('/cart');
    } catch (error) {
       console.log(error)
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
