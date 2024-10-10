import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    

    <div className="container mt-5">
      {product ? (
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Product Details</h3>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <label style={{fontSize:'20px',fontWeight:'600'}}>Name:</label>
              </div>
              <div className="col-md-8">
                <p style={{fontSize:'19px'}}>{product.name}</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
              <label style={{fontSize:'20px',fontWeight:'600'}}>Description:</label>
              </div>
              <div className="col-md-8">
                <p style={{fontSize:'19px'}}>{product.description}</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
              <label style={{fontSize:'20px',fontWeight:'600'}}>Price:</label>
              </div>
              <div className="col-md-8">
                <p style={{fontSize:'19px'}}>{product.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
              <label style={{fontSize:'20px',fontWeight:'600'}}>Category:</label>
              </div>
              <div className="col-md-8">
                <p style={{fontSize:'19px'}}>{product.category}</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/" className="btn btn-outline-primary btn-md ">
                <i className="fas fa-arrow-left"></i> Back to Product List
              </Link>
             
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger">Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
