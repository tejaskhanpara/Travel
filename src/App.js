import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bars from './Navbar.js';
import Home from './Sliders.js';
import Category from './Adventures.js';
import About from './About.js';
import Footer from './Footer';
import Client from './Client';
import Subscribe from './Subscribe';
import Service from './Service';
import Review from './Review';
import mycss from './mycss.module.css';

function App() {
  return (
    <div>
      <Bars/>
      <Home/>
      <Category/>
      <About/>
      <Service/>
      <Review/>
      <Subscribe/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
