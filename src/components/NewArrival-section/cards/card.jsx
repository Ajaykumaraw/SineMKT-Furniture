import React, { useState } from 'react';
import './card.css';
 import images from '../../../assets/images';
import {CiShoppingCart} from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../../redux/cart/cartActions'
// import arrival1 from '../../../assets/images/collection/arrivals1.png';
import arrival2 from '../../../assets/images/collection/arrivals2.png';
import arrival3 from '../../../assets/images/collection/arrivals3.png';
import arrival4 from '../../../assets/images/collection/arrivals4.png';
import arrival5 from '../../../assets/images/collection/arrivals5.png';
import arrival6 from '../../../assets/images/collection/arrivals6.png';
import arrival7 from '../../../assets/images/collection/arrivals7.png';
import arrival8 from '../../../assets/images/collection/arrivals8.png';
import { addProducts } from '../../../redux/cart/cartReducer';
import {proImages} from '../../../assets'

                   


const Card = ({prod}) => {
  const items = useSelector(state=> state.cart.products)
  const total = useSelector(state=> state.cart.products)

  const proIMG = proImages;
 
  console.log(prod)
  const dispatch = useDispatch()
  // console.log(imgs);
 // const path = [arrival1,arrival2,arrival3,arrival4,arrival5,arrival6,arrival7,arrival8]



  
  return (
    <div className='nArrival__card'>
          <div className="nArrival_imageContainer">
              <div className="animation__background">
                 <img className='nArrival_img' src={prod.image} alt="newArrival" />
              </div>
          </div>
         
          <div className="nArrival_addtoCart" onClick={()=>dispatch(addProducts(prod))}>
                <span><CiShoppingCart/> Add to Cart</span>
              </div>
          <div className="nArrival__title-price-section">
              <div className="nArrival-title text-color">{prod.name}</div>
              <div className="nArrival-title text-color">${prod.price}</div>
          </div>
    </div>
  )  
}

export default Card