import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CategoryDetails() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(`/categories/${categoryId}`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    }

    fetchCategory();
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{category.name} Category</h2>
      <p>{category.description}</p>
      {/* You can add more category details here */}
    </div>
  );
}

export default CategoryDetails;
