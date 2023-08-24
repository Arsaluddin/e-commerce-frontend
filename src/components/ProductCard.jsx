import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
