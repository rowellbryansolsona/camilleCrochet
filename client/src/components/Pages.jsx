import {useLocation} from 'react-router-dom';
import Hero from './Hero';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProductPage from './ProductPage';
import '../App.css';

export function Home(){
    return (
        <div>
            <Hero/>
        </div>
    )
}

export function Product(){
    return (
        <div>
            <ProductPage className="mt-5"/>
        </div>
    )
}

export function About(){
    return (
        <div>
            <AboutPage/>
        </div>
    )
}


export function Contact(){
    return (
        <div>
            <ContactPage/>
        </div>
    )
}

export function Error404(){
    let location = useLocation();
    return (
        <div>
            <h1>Error404: The URL {location.pathname} does not exist!</h1>
        </div>
    )
}