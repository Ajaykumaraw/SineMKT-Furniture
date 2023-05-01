import './App.css';
import {Header,WelcomeHero,DiscoverMore,NewArrivalSection,DianingTableSection
,FeaturedProducts,Blog,Clients,Footer} from './components/index';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <WelcomeHero/>
      <DiscoverMore/>
      <NewArrivalSection/>
      <Clients/>
      <Footer/>  
    </div>
  );
}

export default App;
