import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const AddProduct = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate = useNavigate ();

  const onSubmit = async (data) => {
    await axios.post('http://localhost:3000/products', data);
    navigate('/');
  };

  return (
 <form onSubmit={handleSubmit(onSubmit)} className="mt-4 p-4 bg-light rounded shadow">
  <div className="form-group mb-3">
    <div className="form-floating">
      <input
        type="text"
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        id="floatingName"
        placeholder="Product Name"
        {...register('name', { required: true })}
      />
      <label htmlFor="floatingName">Product Name</label>
      {errors.name && <div className="invalid-feedback">* Product name is required</div>}
    </div>
  </div>

  <div className="form-group mb-3">
    <div className="form-floating">
      <textarea
        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
        id="floatingDescription"
        placeholder="Description"
        {...register('description', { required: true })}
        style={{ height: '100px' }}
      />
      <label htmlFor="floatingDescription">Description</label>
      {errors.description && <div className="invalid-feedback">* Description is required</div>}
    </div>
  </div>

  <div className="form-group mb-3">
    <div className="form-floating">
      <input
        type="number"
        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
        id="floatingPrice"
        placeholder="Price"
        {...register('price', { required: true })}/>
      <label htmlFor="floatingPrice">Price</label>
      {errors.price && <div className="invalid-feedback">* Price is required</div>}
    </div>
  </div>

  <div className="form-group mb-3">
    <div className="form-floating">
      <input
        type="text"
        className={`form-control ${errors.category ? 'is-invalid' : ''}`}
        id="floatingCategory"
        placeholder="Category"
        {...register('category', { required: true })}
      />
      <label htmlFor="floatingCategory">Category</label>
      {errors.category && <div className="invalid-feedback">* Category is required</div>}
    </div>
  </div>

  <button type="submit" className="btn btn-primary mt-3 btn-md">Add Product</button>
</form>


  );
};

export default AddProduct;
