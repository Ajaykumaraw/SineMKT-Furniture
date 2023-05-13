import React from 'react';
import './cart.css';
import {CiShoppingCart,CiCircleRemove} from 'react-icons/ci';
import CartItem from './ItemInCart/CartItem';


const Cart = ({setCartOpen}) => {
  return (
    <div className='app__cart'>
        <div className="app__cart-header">
            <div className="app__cart-closeIcon">
                <CiCircleRemove className='app__cart-close' onClick={()=>setCartOpen(false)}/>
            </div>
            <div className="app__cart-header-content">
                     <h1>Cart Items</h1>
                     <CiShoppingCart className='cartIcon'/>
            </div>
        </div>
        <div className='app__cart_item-section'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <div className='app__cart_checkout-section'>

        </div>
    </div>
  )
}

export default Cart