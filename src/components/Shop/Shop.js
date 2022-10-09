import React, { useEffect, useState } from 'react';
import { addToDb, getLocalStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        const storedCart = getLocalStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCart = (selectedProduct) => {
        let newProduct = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newProduct = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== exists.id)
            exists.quantity += 1;
            newProduct = [...rest, exists]

        }
        setCart(newProduct)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map((product) => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-details">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;