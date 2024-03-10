import {Routes, Route} from 'react-router-dom';
import {Home, Product, About, Contact, Error404} from '././components/Pages';
import Navbar from './components/Navbar';
import Footer from './components/FooterPage';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
