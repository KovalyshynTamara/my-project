import logo from './../../assets/imgs/logo_white.png'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


function Header() {
    const location = useLocation()
    const overlay = location.pathname === '/'
        ? <div className="overlay">
            <div className="container">
                <a href="#home" className="logo">
                <img src={logo} alt="Logo"/>
                </a>
                <nav className="main-menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/solutions'}>Solutions</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/contacts'}>Contacts</Link></li>
                    <li><Link to={'/team'}>Our Team</Link></li>
                </ul>
                </nav>
            </div>
        </div>
        : <div className="overlay">
            <div className="container small">
                <a href="#home" className="logo">
                <img src={logo} alt="Logo"/>
                </a>
                <nav className="main-menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/solutions'}>Solutions</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/contacts'}>Contacts</Link></li>
                    <li><Link to={'/team'}>Our Team</Link></li>
                </ul>
                </nav>
            </div>
        </div>
        // const headerClass = 'header'+(location.pathname !== '/' ? 'scroll' : '')

    return (
        <header id='header'>
            {overlay}
        </header>
    ) 
}

document.addEventListener('scroll', function(){
    if (window.scrollY >= 100){
        document.getElementById('header').classList.add('scroll');
    } else {
        document.getElementById('header').classList.remove('scroll');
   }
})
export default Header