import React,{useEffect, useState} from 'react';
import './home.css';
import ProductCard from '../../components/productCard';

const Home = () => {
  // TODO Step 1 : get all product from https://fakestoreapi.com/
const [products,setProducts]= useState([]);
useEffect(()=>{ fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setProducts(data))
},[]);

  return (
    <div className="home-div">
      {/* Filter */}
      <div className="filter-div"></div>
      {/* Product List */}
      <div className="product-list">
        {
          //TODO Step 2 : using ProductCard to display all products by using map
          products.map((product)=>{
            return <ProductCard product= {product} key = {product.id}></ProductCard>
          })
        }
      </div>
    </div>
  );
};

export default Home;
