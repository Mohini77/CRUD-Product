import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setValue('name', response.data.name);
      setValue('description', response.data.description);
      setValue('price', response.data.price);
      setValue('category', response.data.category);
    };
    fetchProduct();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    await axios.put(`http://localhost:3000/products/${id}`, data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
    {/* Similar form as AddProduct but pre-filled */}
    <div className="form-group">
      <label>Product Name</label>
      <input type="text" className="form-control" {...register('name')} />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea className="form-control" {...register('description')} />
    </div>
    <div className="form-group">
      <label>Price</label>
      <input type="number" className="form-control" {...register('price')} />
    </div>
    <div className="form-group">
      <label>Category</label>
      <input type="text" className="form-control" {...register('category')} />
    </div>
    <button type="submit" className="btn btn-primary mt-3">Update Product</button>
  </form>

  );
};

export default EditProduct;
