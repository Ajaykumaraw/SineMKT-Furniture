import React from 'react';
import './cartItem.css';
import arrival1 from '../../../assets/images/slider/slider1.png'
import { useDispatch } from 'react-redux';
import {removeProducts,setQuentity} from '../../../redux/cart/cartReducer'



function CartItem({item}) {

    const removeDispatch = useDispatch()
    const setQuentityDispatch = useDispatch()


    const removeHandler = (item) =>{
        console.log();
        removeDispatch(removeProducts(item))
    }
  return (
    <div className='cart__item'>
        <div className='cart__item-image'>
            <img src={item.image} alt="cart-img" />
        </div>
        <div className='cart__item-title'>
            <div>{item.name}</div>
            <div>Quntity  <input className='cart__item-quantity' onChange={(e)=>setQuentityDispatch(setQuentity({payload:e.target.valueAsNumber}))} defaultValue={1} type="number" /></div>
            <div>Price : ${item.price}</div>
        </div>
        <div className='cart__item-remove'>
            <div>
                <button className='cart__item-remve-btn' onClick={()=>removeHandler(item)}>Remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem