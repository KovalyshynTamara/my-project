import logo from './../../assets/imgs/logo_white.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div>
                        <Link to={'/my-project/'} className="logo">
                            <img src={logo} alt="Logo"/>
                        </Link>
                        <ul className="socials">
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><span className="icon-fb"></span></a></li>
                            <li><a href="https://twitter.com"  target="_blank" rel="noreferrer"><span className="icon-tw"></span></a></li>
                            <li><a href="https://linkedin.com"  target="_blank" rel="noreferrer"><span className="icon-li"></span></a></li>
                            <li><a href="https://youtube.com"  target="_blank" rel="noreferrer"><span className="icon-you"></span></a></li>
                            <li><a href="https://dribble.com"  target="_blank" rel="noreferrer"><span className="icon-dr"></span></a></li>
                            <li><a href="https://behance.com"  target="_blank" rel="noreferrer"><span className="icon-be"></span></a></li>
                        </ul>
                    </div>
                    <nav className="main-menu">
                    <ul>
                        <li><Link to={'/my-project/'} >Home</Link></li>
                        <li><Link to={'/my-project/blog'} >Blog</Link></li>
                        <li><Link to={'/my-project/services'} >Services</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={'/my-project/about'} >About Us</Link></li>
                        <li><Link to={'/my-project/solutions'} >Solutions</Link></li>
                        <li><Link to={'/my-project/contacts'} >Contacts</Link></li>
                        <li><Link to={'/my-project/team'} >Our Team</Link></li>
                    </ul>
                    </nav>    
                </div>
                <div className="copy">
                    © Ensome 2023 All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer