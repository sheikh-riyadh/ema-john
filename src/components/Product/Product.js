import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { img, name, price, ratings, seller } = product;




    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="imageProduct" />
                <h3>Name: {name}</h3>
                <h4>Price: {price}</h4>
                <p>Ratings: {ratings} star</p>
                <p>Seller: {seller}</p>
            </div>
            <button className='add-to-cart-btn' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
};
export default Product;
