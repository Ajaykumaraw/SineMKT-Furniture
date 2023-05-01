import React from 'react';
import './card.css';
 import images from '../../../assets/images';
import {CiShoppingCart} from 'react-icons/ci';
import arrival from '../../../assets/images/collection/arrivals3.png';
                   


const Card = ({imgs}) => {
  console.log(imgs);
  const path = imgs.images;
  return (
    <div className='nArrival__card'>
          <div className="nArrival_imageContainer">
              <div className="animation__background">
                 <img className='nArrival_img' src={path} alt="" />
              </div>
          </div>
          <div className="nArrival_addtoCart">
                <span><CiShoppingCart/> Add to Cart</span>
              </div>
          <div className="nArrival__title-price-section">
              <div className="nArrival-title text-color">Wooden chair</div>
              <div className="nArrival-title text-color">$65.00</div>
          </div>
    </div>
  )
}

export default Card