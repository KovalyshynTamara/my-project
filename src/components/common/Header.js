import logo from './../../assets/imgs/logo_white.png'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation()
    const overlay = location.pathname === '/'
        ? <div className="overlay">
            <div className="container">
                <Link to={'/my-project/'} Home className="logo">
                <img src={logo} alt="Logo"/>
                </Link>
                <nav className="main-menu">
                <ul>
                    <li><Link to={'/my-project/'}>Home</Link></li>
                    <li><Link to={'/my-project/solutions'}>Solutions</Link></li>
                    <li><Link to={'/my-project/services'}>Services</Link></li>
                    <li><Link to={'/my-project/about'}>About Us</Link></li>
                    <li><Link to={'/my-project/blog'}>Blog</Link></li>
                    <li><Link to={'/my-project/contacts'}>Contacts</Link></li>
                    <li><Link to={'/my-project//team'}>Our Team</Link></li>
                </ul>
                </nav>

                <div class="hmb-wrap" id=".hmb-wrap">
                    <button type="button" id="hamb-btn" class="hamburger" onClick={toggleMenu}><span></span></button>
                </div>
            </div>
        </div>
        : <div className="overlay">
            <div className="container small">
                <Link to={'/my-project/'} className="logo">
                <img src={logo} alt="Logo"/>
                </Link>
                <nav className="main-menu">
                <ul>
                    <li><Link to={'/my-project/'}>Home</Link></li>
                    <li><Link to={'/my-project/solutions'}>Solutions</Link></li>
                    <li><Link to={'/my-project/services'}>Services</Link></li>
                    <li><Link to={'/my-project/about'}>About Us</Link></li>
                    <li><Link to={'/my-project/blog'}>Blog</Link></li>
                    <li><Link to={'/my-project/contacts'}>Contacts</Link></li>
                    <li><Link to={'/my-project/team'}>Our Team</Link></li>
                </ul>
                </nav>
                <div class="hmb-wrap" id=".hmb-wrap">
                    <button type="button" id="hamb-btn" class="hamburger"  onClick={toggleMenu}><span></span></button>
                </div>
            </div>
        </div>

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

function toggleMenu(){
    document.getElementById("mobile-menu").classList.toggle("open")
    document.getElementById("hamb-btn").classList.toggle("active")
    document.getElementById("shadow").classList.toggle("show")
}
export default Header