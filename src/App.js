import './App.css';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import { Header,Footer } from './components';
import SingleProductView from './components/SIngleProductView/SingleProductView';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cart/cartReducer';

const store = configureStore({
  reducer : {
    cart : cartReducer,
  }
})


function App() {
  const[cartOpen,setCartOpen] = useState(false);
  const [searchBar,activeSearchBar] = useState(false);
  const SearchContext = createContext();

    console.log(cartOpen);
  return (
    <div className="App">
      <Provider store={store}>
        <SearchContext.Provider value={searchBar}>
        <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />}>
                <Route index element={<Homepage />} />
              </Route>
              <Route path='/:id' element={<SingleProductView />} />
          </Routes>
          </BrowserRouter>
          <Footer/>  
        </SearchContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
