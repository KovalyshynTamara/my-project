import { Link } from "react-router-dom"

function MobileMenu() {
    return (
        <div>
            <div id="mobile-menu">
                <nav class="mobile-menu-list">
                <ul  itemscope itemtype="http://schema.org/SiteNavigationElement">
                    <li><Link to={'/'} itemprop="url" >Home</Link></li>
                    <li><Link to={'/solutions'} itemprop="url" >Solutions</Link></li>
                    <li><Link to={'/services'} itemprop="url" >Services</Link></li>
                    <li><Link to={'/about'} itemprop="url" >About Us</Link></li>
                    <li><Link to={'/blog'} itemprop="url" >Blog</Link></li>
                    <li><Link to={'/contacts'} itemprop="url" >Contacts</Link></li>
                    <li><Link to={'/team'} itemprop="url" >Our Team</Link></li>
                </ul>
                </nav>
               
                <ul className="socials"> <h3>Follow us</h3>
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><span className="icon-fb"></span></a></li>
                    <li><a href="https://twitter.com"  target="_blank" rel="noreferrer"><span className="icon-tw"></span></a></li>
                    <li><a href="https://linkedin.com"  target="_blank" rel="noreferrer"><span className="icon-li"></span></a></li>
                    <li><a href="https://youtube.com"  target="_blank" rel="noreferrer"><span className="icon-you"></span></a></li>
                    <li><a href="https://dribble.com"  target="_blank" rel="noreferrer"><span className="icon-dr"></span></a></li>
                    <li><a href="https://behance.com"  target="_blank" rel="noreferrer"><span className="icon-be"></span></a></li>
                </ul>
            </div>
            <div id="shadow" onClick={toggleMenu}></div>
        </div>
    )
}
function toggleMenu(){
    document.getElementById("mobile-menu").classList.toggle("open")
    document.getElementById("hamb-btn").classList.toggle("active")
    document.getElementById("shadow").classList.toggle("show")
}
export default MobileMenu