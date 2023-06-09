import React from 'react';
import './discoverMore.css'
import images from '../../assets/images';

const DiscoverMore = () => {
  return (
    <div id='Discover' className='app__discover section_padding'>
        <div className='app__discover-arm_chair'>
            <img src={images.popular1} alt="arm char"/>
            <h2 className='app__discover-arm_chair-title card_title'>Arm char</h2>
            <p className='app__discover-arm_chair-description'>Lorem ipsum dolor sit amet dolor sit amet.</p>
        </div>
        <div className='app__discover-latest_designed'>
            <img src={images.popular2} alt="" />
            <div className='app__discover-latest_designed-content'>
                <h2 className='app__discover-latest_designed-content-title card_title'>Latest Designed Stool and chair</h2>
                <p className='app__discover-content-discreption'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ipsam!</p>
                <div  className='app__discover-content-sale' >
                  <p>Sale start from</p>
                  <p className='app__discover-price'>$99.00</p>
                </div>
                <button className='custom__button app__discover-content-button'>Discover More</button>
            </div>
        </div>
        <div className='app__discover-hangin_lamp'>
              <img className='hanginLanp' src={images.popular3} alt="hanging lamp" />
              <h2 className='app__discover-arm_chair-title card_title'>Hanging Lamp</h2>
              <p>Lorem ipsum dolor sit amet consectetur recusandae?</p>
        </div>
    </div>
  )
}

export default DiscoverMore