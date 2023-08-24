import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
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
        {/* <Route exact path="/products" component={Products} /> */}
        {/* <Route path="/products/:productId" component={ProductDetails} /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <Route path="/orders" component={Orders} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
