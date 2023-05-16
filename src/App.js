import './App.css';
import { useState } from 'react';
import Cart from './components/CartSection/Cart';
import {Header,WelcomeHero,DiscoverMore,NewArrivalSection,DianingTableSection
,FeaturedProducts,Blog,Clients,Footer} from './components/index';
import SearchBar from '../src/components/SearchBar/Searchbar';
import { createContext } from 'react';


function App() {
  const[cartOpen,setCartOpen] = useState(false);
  const [searchBar,activeSearchBar] = useState(false);
  const SearchContext = createContext();

    console.log(cartOpen);
  return (
    <div className="App">
      <SearchContext.Provider value={searchBar}>
        {searchBar?<SearchBar/>:""}
        <Header searchBar={searchBar} activeSearchBar={activeSearchBar} setCartOpen={setCartOpen} className="header"/>
        {cartOpen?<Cart setCartOpen={setCartOpen} className='cart'/>:''}
        <WelcomeHero/>
        <DiscoverMore/>
        <NewArrivalSection/>
        <Clients/>
        <Footer/>  
      </SearchContext.Provider>
    </div>
  );
}

export default App;
