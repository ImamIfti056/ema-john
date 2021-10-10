import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    let shipping = 15;
    const tax = (total) * 0.1;
    let grandTotal = 0;
    grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className="cart-container">
            <h2>Order Summary</h2>
            <hr />
            <p><b>Items Ordered:</b> {cart.length}</p>
    
            <div className="pricing">
                <p>Items:</p>
                <p>${total.toFixed(2)}</p>
            </div>
            <div className="pricing">
                <p>Tax:</p>
                <p>${tax.toFixed(2)}</p>
            </div>
            <div className="pricing">
                <p>Shipping:</p>
                <p>${shipping}</p>
            </div>
            <hr />
            <h3><span>Grand Total:</span> ${grandTotal}</h3>
        </div>
    );
};

export default Cart;