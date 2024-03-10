import {Link} from 'react-router-dom'; 
import '../components/Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () { 
  return ( 
    <div className='footer'>
        <Container className='footcontainer tracking-in-expand-fwd'>
          <Row className='containerRow'>
            <Col className='contactcol focus-in-expand'>
                  <h1>Contacts</h1>
                  <p><i className="fa-solid fa-location-pin"></i>Poblacion Ilaod, Ragay, Camarines Sur</p>
                  <p><i className="fa-solid fa-hashtag"></i>+63 9665326531</p>
                  <h1>Follow Us</h1>
                  <a href="https://www.facebook.com/profile.php?id=100069307861847&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook fa-2xl" aria-hidden="true"></i></a>
            </Col>
            <Col className='linkscol focus-in-expand'>
                  
                  <ul>
                  <h1>Quick Links</h1>
                    <li><Link to="/" className='a'>Home</Link></li>
                    <li><Link to="/product" className='a'>Product</Link></li>
                    <li><Link to="/about" className='a'>About</Link></li>
                    <li><Link to="/contact" className='a'>Contact</Link></li>
                  </ul>
            </Col>
            <Col className='fbcol focus-in-expand'>
                <img src="/img/logoDark.jpg" alt=""/>
            </Col>
          </Row>
        </Container>
    
        <div className="footerbottom focus-in-expand">
            <p>&copy; 2024 Camille Crochet All Rights Reserved</p>
        </div>
  </div> ) 
  } 

export default Footer;