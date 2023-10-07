import React from 'react';
import './cart.css';
import {CiShoppingCart,CiCircleRemove} from 'react-icons/ci';
import CartItem from './ItemInCart/CartItem';
import { useSelector } from 'react-redux';


const Cart = ({cartOpen,setCartOpen}) => {
  const cartItems = useSelector(state=> state.cart.products)
  const total = useSelector(state=> state.cart.total)

  //console.log(cartItems);
  return (
    <div className='app__cart'>
        <div className="app__cart-header">
            <div className="app__cart-closeIcon">
                <CiCircleRemove className='app__cart-close' onClick={()=>setCartOpen(!cartOpen)}/>
            </div>
            <div className='cart-menu-cart_container'>
                  <div className='header_menu-cart-icon'>
                   <span onClick={()=> {setCartOpen(!cartOpen)}}><CiShoppingCart size={35}/></span>
                  </div>
                 {(cartItems.length>0)? <div className='cart-menu-cart_item'>
                    <div className='header-menu-cart_item-count'>{cartItems.length}</div>
                  </div>: ""}
                </div>
        </div>
        <div className='app__cart_item-section'>
          { cartItems.map((item)=>{ return <CartItem key={item.productID} item={item}/>})}
           
           
        </div>
        <div className='app__cart_checkout-section'>
            <div className='app__cart-subtotal-amount'>
                <div className='app__cart-subtotal-amount-title'>Subtotal Amount :</div>
                <div className='app__cart-subtotal-amount-price'>${total}</div>
            </div>
            <div className='app__cart-checkout-btn'>
                <button className='cat-btn'>CHECK OUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart