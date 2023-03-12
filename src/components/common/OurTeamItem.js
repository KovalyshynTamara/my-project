
function OurTeamItem(props) {
    const { name, position, image } = props
    
    return (
        <div className="card">
            <div className="img-wrap">
                <img src={`/../assets/imgs/${image}`} alt="Team Member" />
            </div>
            <div className="name-wrap">
                <div className="name">{name}</div> 
              <ul className="socials">
                <li><a href="https://facebook.com"><span className='icon-fb'></span></a></li>
                <li><a href="https://twitter.com"><span className='icon-tw'></span></a></li>
                <li><a href="https://linkedin.com"><span className='icon-li'></span></a></li>
            </ul>  
            </div>
            
            <div className="position">{position}</div>
            
        </div>
    )
}
export default OurTeamItem