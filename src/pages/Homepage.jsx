import React from 'react'
import {WelcomeHero,DiscoverMore,NewArrivalSection,DianingTableSection
    ,FeaturedProducts,Blog,Clients,Footer} from '../components/index';
import Cart from '../components/CartSection/Cart';

function Homepage() {
  return (
    <div className='app__home-container' style={{marginTop: '2rem',marginBottom:'2rem'}}>
        <WelcomeHero/>
        <DiscoverMore/>
        <NewArrivalSection/>
        <Clients/>
        <Cart></Cart>
    </div>
  )
}

export default Homepage