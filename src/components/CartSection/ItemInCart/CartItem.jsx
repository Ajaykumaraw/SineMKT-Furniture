import React, { useState } from 'react';
import './cartItem.css';
import { useDispatch } from 'react-redux';
import {removeProducts,setQuentity} from '../../../redux/cart/cartReducer'
import {AiOutlineCloseSquare} from 'react-icons/ai'


function CartItem({item}) {

    const removeDispatch = useDispatch()
    const [Quantity,setQuantity] = useState(1)


    const removeHandler = (item) =>{
        console.log();
        removeDispatch(removeProducts(item))
    }

    const changeQuntity = (btnType) =>{
         (btnType && Quantity>0)? setQuantity(Quantity=> Quantity +1) : setQuantity(Quantity=> Quantity -1)
    }

    
  return (
    <div className='cart__item'>
         <div className='cart__item-quntity'>
            <button onClick={()=> changeQuntity(true)} className='cat__item_qountity-btn'>+</button>
            <button onClick={()=> changeQuntity(false)} disabled={Quantity<2} className='cat__item_qountity-btn'>-</button>
        </div>
        <div className='cart__item-image'>
            <img src={item.image} alt="cart-img" />
        </div>
        <div className='cart__item-title'>
            <div>{item.name}</div>
            <div className='cart__item-quntity-Quantity'>Quntity : {Quantity}</div> 
        </div>
        <div className='cart__item-price'>
            <div>$ {item.price}</div>
        </div>
        <div className='cart__item-remove'>
            <div>
                <AiOutlineCloseSquare size={35} color='black' onClick={()=>removeHandler(item)} />
                
            </div>
        </div>
    </div>
  )
}

export default CartItem