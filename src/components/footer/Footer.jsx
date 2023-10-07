import React from 'react';
import './footer.css';
import {CiSearch,CiSettings,CiShoppingCart,CiFacebook,CiInstagram,CiLinkedin,CiYoutube} from 'react-icons/ci';

const Footer = () => {
  return (
    <div id='Contact' className='app__footer section_padding'>
       <div className="app__footer-links">
           
            <div className="app__footer-information">
            <h2 className='footer__title'>Information</h2>
                <ul className='foooter-list'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>News </li>
                  <li>Store</li>
                </ul>
            </div>
            
            <div className="app__footer-Collections">
            <h2 className='footer__title'>Collections</h2>
            <ul className='foooter-list'>
                  <li>Wooden Chair</li>
                  <li>Royal Cloth Sofa</li>
                  <li>Accent Chair</li>
                  <li>Bed</li>
                  <li>Hanging Lamp</li>
                </ul>
            </div>
            <div className="app__footer-My Accounts">
              <h2 className='footer__title'>My Accounts</h2>
            <ul className='foooter-list'>
                  <li>My Account</li>
                  <li>Wishlist</li>
                  <li>Community</li>
                  <li>Order History</li>
                  <li>My Cart</li>
                </ul>
            </div>
            <div className="app__footer-Newsletter">
              <h4 className='footer__title'>Newsletter</h4>
                  <div className='foooter-list'>
                    <div>Subscribe to get latest news,update and information.</div>
                  </div>
                  <div className='footer__sub'><input placeholder='Enter Email Here...' type="text" /></div>
            </div>
        </div>
        <div className="app__footer-link-copyrights">
            <div className='footer__icons'>
                <div className='ic'><CiFacebook></CiFacebook></div>
                <div className='ic'><CiInstagram></CiInstagram></div>
                <div className='ic'><CiLinkedin></CiLinkedin></div>
                <div className='ic'><CiYoutube></CiYoutube></div>
            </div>
            <div className='footer__copyright'>©Copyright. Designed And Developed By Ajay kumar</div>
        </div>
    </div>
  )
}

export default Footer