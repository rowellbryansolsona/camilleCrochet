import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../service/dataservice';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Perform your fetch or any other action here
    // For example, fetch product details based on the ID
    fetchProduct(id);
  }, [id]); // Dependency array ensures this effect runs when the ID changes

  // Function to fetch product details based on ID
  const fetchProduct = async (productId) => {
    try {
      const response = await DataService.getProductsbyId(`/api/products/${productId}`); // Example URL

      setProduct(response); // Update product state with fetched data
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div className='detailscontent'>
      <h2>Product Details</h2>
      {product ? (
        <div className='prodContent'>
          <img src={product[0].filepath} alt="" />
          <div className='desc'>
              <p>ID: {product[0].id}</p>
              <p>Name: {product[0].title}</p>
              <p>Price: {product[0].price}</p>
          </div>
          
          {/* Display other product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className='btn'>
        <button type='button'><Link className='btnback' to="/product">Back</Link></button>
      </div>
    </div>
  );
}

export default ProductDetails;