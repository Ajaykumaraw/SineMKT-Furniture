import React from 'react';
import  './clients.css';
import logo1 from '../../assets/images/clients/c1.png';
import logo2 from '../../assets/images/clients/c2.png';
import logo3 from '../../assets/images/clients/c3.png';
import logo4 from '../../assets/images/clients/c4.png';
import logo5 from '../../assets/images/clients/c5.png';

const Clients = () => {
  return (
    <div id='Clients' className='app__clients section_padding '>
        <div className="clientBrands">
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo5} alt="" />
            <img src={logo4} alt="" />
            <img src={logo1} alt="" />
        </div>
    </div>
  )
}

export default Clients