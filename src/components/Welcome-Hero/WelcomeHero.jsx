import React from 'react';
import './welcomeHero.css';
import {slider} from '../../assets';

const WelcomeHero = () => {
  
  return (
    <div className='app__welcome section_padding'>
        <div className='app__welcome-content'>
            <p className='welcome-title'>Great Design Collection</p>
            <p className='welcome-tag'>Cloth Covered Accent Chair</p>
            <p className='welcome-descp'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                         Sed Do Eiuiana Smod Tempor Ut
                     Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
                     Quis Nostrud Exercitation Ullamco
                     Laboris Nisi Ut Aliquip.</p>
            <p className='welcome-content-line'><span ></span>$ 399.0</p>
             <div className='welcom-content-btn'>
                <button type='button'  className='custom__button addto-cart-btn'>+ Add to cart</button> 
                 <button type='button' className='custom__button more-info-btn'>More Info</button>
             </div>       
        
        </div>
          <div className='app__welcome-image'>
            <img src={slider} alt="slider-img"/>
          </div>

    </div>
  )
}

export default WelcomeHero


// <div className="welcome-content">
//        <div className='welcome-content-cont'>
//            <p className='welcome-title'>Great Design Collection</p>
//            <p className='welcome-tag'>Cloth Covered Accent Chair</p>
//            <p className='welcome-descp'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
//                         Sed Do Eiuiana Smod Tempor Ut
//                     Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
//                     Quis Nostrud Exercitation Ullamco
//                     Laboris Nisi Ut Aliquip.</p>
//            <p> <span><div className='welcome-content-line'></div></span>$ 399.0</p>
//             <div className='welcom-content-btn'>
//                <button type='button' className='custom__button addto-cart-btn'>+ Add to cart</button> 
//                 <button type='button' className='custom__button more-info-btn'>More Info</button>
//             </div>       
//         </div>
{/* <div className="welcome-image">
<img src={slider} alt="slider-img"/>
</div> */}
//       </div>