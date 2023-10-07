import {WelcomeHero,DiscoverMore,NewArrivalSection
   ,Clients} from '../components/index';
import Cart from '../components/CartSection/Cart';
import { ToastContainer, toast } from 'react-toastify';


function Homepage({cartOpen,setCartOpen}) {
  return (
    <div className='app__home-container' style={{marginTop: '2rem',marginBottom:'2rem'}}>
        <WelcomeHero/>
        <DiscoverMore/>
        <NewArrivalSection/>
        <Clients/>
        <ToastContainer/>
       {(cartOpen)?<Cart cartOpen={cartOpen} setCartOpen={setCartOpen}></Cart>:''}
    </div>
  )
}

export default Homepage