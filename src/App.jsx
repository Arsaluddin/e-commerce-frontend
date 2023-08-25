import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoryPage';
import Products from './pages/ProductPage';
// import ProductDetails from './pages/ProductDetails';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
// import Cart from './pages/Cart';
// import Orders from './pages/Orders';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <> 
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<CategoriesPage/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/products/:productId" component={ProductDetails} /> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <Route path="/orders" component={Orders} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
