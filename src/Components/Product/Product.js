import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price ,stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className="product-img">
                <img className='product-img' src={img} alt="product-img" />
            </div>
            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p>By: {seller} </p>
                <h4>Price: ${price} </h4>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-purchase">{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;