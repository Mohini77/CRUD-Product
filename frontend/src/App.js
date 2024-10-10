import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
    <div className="container">
      <h1 className='mt-4 mb-4 text-center'>Product Management System</h1>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
    </Router>
  );

}

export default App;

