import logo from './../../assets/imgs/logo_white.png'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { devHome,prodHome } from './../../config';



function Header() {
    const location = useLocation()
    const overlay = (location.pathname === devHome && window.location.hostname === 'location') || (location.pathname === prodHome && window.location.hostname !== 'location')
        ? <div className="overlay">
            <div className="container">
                <Link to={'/'} Home className="logo">
                <img src={logo} alt="Logo"/>
                </Link>
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

                <div class="hmb-wrap" id=".hmb-wrap">
                    <button type="button" id="hamb-btn" class="hamburger" onClick={toggleMenu}><span></span></button>
                </div>
            </div>
        </div>
        : <div className="overlay">
            <div className="container small">
                <Link to={'/'} className="logo">
                <img src={logo} alt="Logo"/>
                </Link>
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

// document.getElementById('mobile-menu').addEventListener('click', function () {
//     document.getElementById('mobile-menu').classList.add('open');
// })
// document.getElementById("hamb-btn").addEventListener('click', function () {
//     document.getElementById("hamb-btn").classList.add('active');
// })
// document.getElementById("shadow").addEventListener('click', function () {
//     document.getElementById("shadow").classList.add('show');
// })
function toggleMenu(){
    document.getElementById("mobile-menu").classList.toggle("open")
    document.getElementById("hamb-btn").classList.toggle("active")
    document.getElementById("shadow").classList.toggle("show")
}
export default Header