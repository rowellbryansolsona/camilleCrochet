import './Hero.css';
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
        <div className='herobg img-fluid'>
          <div className='herocontent bounce-top'>
              <h1>Follow your soul.</h1>
              <h4>It knows the way to the yarn store.</h4>
              <Link to="/product"><button>See all Products</button></Link>
          </div>
          
        </div>
    </div>
    
  );
}
export default Hero;
