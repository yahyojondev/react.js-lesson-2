import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Banner from './components/banner/Banner';
import Wrapper from './components/wrapper/Wrapper'
import {banner} from "./static/Index"
import {wrapperproduct} from "./static/Index"
import Footer from './components/footer/Footer';
function App() {
  let bannerproduct = banner?.map(el => (
   <Banner key={el.id} {...el}/>  
   ))
   const products = wrapperproduct?.map(el=>(
 
     <Wrapper key={el.id} {...el}/>
   ))
  return (
   <>
   <Navbar/>
   <Hero/>
   {bannerproduct}
   <div className="wrapper__cards">
      {products}
   </div>
   <Footer/>
 
  
   </>
  );
}

export default App;
