// src/pages/CategoriesPage.js
import React, { useEffect, useState } from 'react';
import CategoriesListComponent from '../components/CategoryList';
import ProductList from '../components/ProductList';
import axios from 'axios';

const samplecategories = ['Electronics', 'Clothing', 'Home Appliances', 'Beauty', 'Books'];

const CategoriesPage = () => {
  // const [categories, setCategories] = useState(samplecategories);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch categories from the API
    axios.get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      

      <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <CategoriesListComponent onSelectCategory={setSelectedCategory} />

          <h2 className="text-2xl font-semibold mt-8">Products</h2>
          {selectedCategory ? (
          <ProductList categoryId={selectedCategory} />
           ) : (
           <p>Please select a category to view products.</p>
          )}
         </div>
    </div>
  );
};

export default CategoriesPage;
