import React from 'react';
import './cart.css';
import {CiShoppingCart,CiCircleRemove} from 'react-icons/ci';
import CartItem from './ItemInCart/CartItem';
import { useSelector } from 'react-redux';


const Cart = ({setCartOpen}) => {
  const cartItems = useSelector(state=> state.cart.products)
  const total = useSelector(state=> state.cart.total)

  console.log(cartItems);
  return (
    <div className='app__cart'>
        <div className="app__cart-header">
            <div className="app__cart-closeIcon">
                <CiCircleRemove className='app__cart-close' onClick={()=>setCartOpen(false)}/>
            </div>
            <div className="app__cart-header-content">
                     <CiShoppingCart className='cartIcon'/>
            </div>
        </div>
        <div className='app__cart_item-section'>
          { cartItems.map((item)=>{ return <CartItem item={item}/>})}
           
           
        </div>
        <div className='app__cart_checkout-section'>
            <div>Total section: {total}</div>
        </div>
    </div>
  )
}

export default Cart