// src/pages/CategoriesPage.js
import React, { useEffect, useState } from 'react';
import CategoriesListComponent from '../components/CategoryList';
import axios from 'axios';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    axios.get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <CategoriesListComponent categories={categories} />
    </div>
  );
};

export default CategoriesPage;
