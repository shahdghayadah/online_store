import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './productDetails.css'
const ProductDetailsPage = () => {
  //TODO step 10 : using useParams to get id for product
  const {id} = useParams();
  console.log(id);

  // TODO step 11 : get  product by id "Get a single product" from https://fakestoreapi.com/

  const [product, setProduct] = useState({})
    useEffect(()=>{ 
    console.log('use effect is invoked')
     fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()).then(data=>setProduct(data))
},[])

  // TODO step 12 : build Product Details Page
        //.? ?. its if else 

  return (
    <div className='div'>
      <h1 className='h1'>Product Details </h1>
      <div className="product-image">
        <img  className='img' src={product.image} />
      </div>
      <div className='div'>
        <h3 className='h3'>{product.title}</h3>
        <p className='p'>{product.description} </p>
        <p className='p2'>{product.category} </p>
        <p className='p3'>{product.price} $</p>
        <p className='p2'>rate : {product?.rating?.rate} count : {product?.rating?.count} </p>
      </div>

    </div>
  );
};

export default ProductDetailsPage;
