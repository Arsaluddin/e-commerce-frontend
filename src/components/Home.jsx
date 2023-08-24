import React from 'react';
import Footer from './Footer';
import ProductCard from './ProductCard';


const exampleProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      imageUrl: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      imageUrl: 'product2.jpg',
    },
    // Add more products as needed
  ];


const Home = () => {
    // Example category data
    const exampleCategories = ['Electronics', 'Clothing', 'Home Appliances', 'Beauty', 'Books'];
  
  
    const handleSearch = (searchTerm) => {
      // Handle search logic here
      console.log('Searching for:', searchTerm);
    };
  
    return (
      <div>
        
  
        {/* Hero section */}
        <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-semibold mb-4">Discover Amazing Products</h1>
    <p className="text-lg mb-8">Find the best deals on your favorite products.</p>
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search for products..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <svg
          className="w-6 h-6 absolute top-3 left-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 20L15 15"
          />
        </svg>
      </div>
    </div>
  </div>
</section>

  
        {/* Featured products section */}
        <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {exampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
        {/* ... Rest of the code ... */}
  
        {/* Category section */}
        <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="flex justify-center space-x-4">
            {exampleCategories.map((category) => (
              <div key={category} className="px-4 py-2 bg-white rounded-md shadow-md cursor-pointer">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* ... Rest of the code ... */}
  
        <Footer />
      </div>
    );
  };
  
  export default Home;
  
    
