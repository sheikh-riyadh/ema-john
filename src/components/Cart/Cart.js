import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className='cart-info'>
            <h3>Order summary</h3>
            {<p>Selected items: {cart.length}</p>}
        </div>
    );
};

export default Cart;