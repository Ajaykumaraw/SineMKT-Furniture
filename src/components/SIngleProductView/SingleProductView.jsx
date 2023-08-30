import React from 'react'
import './singleProductView.css';
import sliderImage from '../../assets/images/slider/slider1.png'
import { products } from '../../SampleData/product';



function SingleProductView() {
  return (
    <div className='app_singleProduct .section_padding'>
        <div className='app__product-image'>
            <img src={sliderImage} alt="" />
        </div>
        <div className='app__product-Descriptiions'>
            <div className='app__product-title'>{products[0].productTitle}</div>
            <div className='app__product-description'>{products[0].ProductDesc}</div>
            <div className='app__product-price'>$ {products[0].productPrice}</div>
            <div className='app__product-addcount'>
                <div className='app__product-count'><input type='number' placeholder='1'></input></div>
                <button className='app__product-addtoCart'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProductView