// src/components/CategoryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const sampleCategories = [
  { _id: '1', name: 'Electronics' },
  { _id: '2', name: 'Clothing' },
  { _id: '3', name: 'Home & Kitchen' },
  // Add more sample categories as needed
];

function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState(sampleCategories);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        // setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex space-x-4">
      {categories.map(category => (
        <div
          key={category._id}
          className="cursor-pointer p-2 border rounded-md hover:bg-gray-100"
          onClick={() => onSelectCategory(category._id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;

