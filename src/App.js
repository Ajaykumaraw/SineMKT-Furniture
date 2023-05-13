import './App.css';
import { useState } from 'react';
import Cart from './components/CartSection/Cart';
import {Header,WelcomeHero,DiscoverMore,NewArrivalSection,DianingTableSection
,FeaturedProducts,Blog,Clients,Footer} from './components/index';

function App() {
  const[cartOpen,setCartOpen] = useState(false);
    console.log(cartOpen);
  return (
    <div className="App">
      <Header setCartOpen={setCartOpen} className="header"/>
      {cartOpen?<Cart setCartOpen={setCartOpen} className='cart'/>:''}
      <WelcomeHero/>
      <DiscoverMore/>
      <NewArrivalSection/>
      <Clients/>
      <Footer/>  
    </div>
  );
}

export default App;
