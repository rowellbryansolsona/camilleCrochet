import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css'; 
import { useState} from 'react';



// const Navigation = styled.nav`
// z-index:999;
// background: linear-gradient(to right, #867bc7, #FFB4B4, #FFDEB4);
// display: flex;
// justify-content: center;
// align-items: center;
// height: 140px;
// width: 100%;
// padding: 10px 120px;
// position: fixed;
// z-index: 999;
// `

// const Logo = styled.img`
// width: 130px;
// border: 2px ;
// border-radius: 20%;
// cursor: pointer;
// `
// const UList = styled.ul`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 35px;
//     padding: 0 6px;
//     list-style: none;
// `
// const UListLink =styled.li`
//     font-weight: 500;
//     cursor: pointer;
//     text-decoration: none;
//     font-size: 16px;
// `

// const LinkA = styled(Link)`
//     text-transform: uppercase;
//     text-decoration: none;
//     text-shadow: 2px 2px 5px white;
//     color: black;
//     &:hover{
//     color: #B2A4FF;
//     text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 5px white;
//     transition: 0.8s;
// }
//     }
// `


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
            <nav>
                <Link className='logocontainer' to="/" ><img className='logo rotate-scale-down' src="/img/logoLight.jpg" alt="" /></Link>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : "" }>
                   <li><NavLink  to="/">Home</NavLink></li>
                   <li><NavLink  to="/product">Products</NavLink></li>
                   <li><NavLink  to="/about">About</NavLink></li>
                   <li><NavLink  to="/contact">Contact</NavLink></li>
              </ul>
            </nav>

        // <nav className='nav fixed-top'>
        //      <Link className='logocontainer' to="/" ><img className='logo rotate-scale-down' src="/img/logoLight.jpg" alt="" /></Link>
            
        //      <ul className='bounce-in-top'>
        //           <li><Link className='link' to="/">Home</Link></li>
        //           <li><Link className='link' to="/product">Products</Link></li>
        //           <li><Link className='link' to="/about">About</Link></li>
        //           <li><Link className='link' to="/contact">Contact</Link></li>
        //      </ul>
           
        // </nav>

    )
}

export default Navbar;



