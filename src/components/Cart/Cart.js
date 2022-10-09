import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total += (product.price * product.quantity);
        shipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = total * 0.1;
    const grandTotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart-info'>
            <h3>Order summary</h3>
            {<p>Selected items: {quantity}</p>}
            {<p>Total Price: $ {total}</p>}
            {<p>Total Shipping: $ {shipping}</p>}
            {<p>Tax: $ {tax.toFixed(2)}</p>}
            {<h3>Grand total: $ {grandTotal}</h3>}
        </div>
    );
};

export default Cart;