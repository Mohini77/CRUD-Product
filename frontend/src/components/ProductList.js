import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
  };

  return (
    <div className='mt-4'>
        <Link to='/add-product' className='btn btn-primary mb-2'>Add Product</Link>
        <div className='table-responsive'>
        <table className='table table-bordered'>
           <thead>
             <tr className="fs-5">
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
             </tr>
           </thead>
           <tbody>
            {products.map((product)=>(
                <tr  style={{fontSize:'19px'}} key={product._id}>
                 <td>{product.name}</td>
                 <td>{product.description}</td>
                 <td>{product.price}</td>
                 <td>{product.category}</td>
                 <td className='d-flex'>
                    <Link to={`/product-details/${product._id}`} className="btn btn-success btn-md ">View</Link>
                    <Link to={`/edit-product/${product._id}`} className='btn btn-warning btn-md mr-2 mx-3'>Edit</Link>
                    <button onClick={() => deleteProduct(product._id)} className="btn btn-danger btn-md ">Delete</button>
                 </td>
                </tr>
            ))}
           </tbody>
        </table>
        </div>
    </div>
  );
};

export default ProductList;
