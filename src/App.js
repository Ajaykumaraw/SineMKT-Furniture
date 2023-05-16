import './App.css';
import { useState } from 'react';
import Cart from './components/CartSection/Cart';
import {Header,WelcomeHero,DiscoverMore,NewArrivalSection,DianingTableSection
,FeaturedProducts,Blog,Clients,Footer} from './components/index';
import SearchBar from '../src/components/SearchBar/Searchbar';


function App() {
  const[cartOpen,setCartOpen] = useState(false);
  const [searchBar,activeSearchBar] = useState(false);

    console.log(cartOpen);
  return (
    <div className="App">
      {searchBar?<SearchBar/>:""}
      <Header searchBar={searchBar} activeSearchBar={activeSearchBar} setCartOpen={setCartOpen} className="header"/>
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
