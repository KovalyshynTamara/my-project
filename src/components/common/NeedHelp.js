import blockTitle from './../../data/blockTitle.json'
import { Link } from 'react-router-dom'
function NeedHelp() {
    return (
        <section className="blue-bg" id="help">
            <div className="container">
                <h2>{blockTitle.needHelp.title}</h2>
                <p>{blockTitle.needHelp.text}</p>
                <Link to={'my-project/contacts'} className="btn">Contact Us</Link>
            </div>
            
        </section>
    )
}

export default NeedHelp