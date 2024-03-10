import './AboutPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage() {
  return (
<div className='about'>
  <div className='aboutbg'>
      <h1 className='tracking-in-expand-fwd'>
        <i className="fa-solid fa-circle-info"></i>
        <div>
        About
        </div>
      </h1>
      <p className='tracking-in-expand-fwd'>Camille Crochet</p>
      <div className="about-section tracking-in-expand-fwd ">
          <p> Camille crochet started year 2022.When i learned crocheting everything change. Yes! as a beginners its hard. You have to invest a lot of patience.But as long as you love what you're doing you can do anything.As i built Camille crochet Ifound peace. I found love.I craft love in every thread. This is not about businness this is my life together with my family i am happy to serve,make crochet yet always open to learn.</p>
      </div>
  </div>
 
</div>
  )
}

export default AboutPage;