import Pricing from "../components/Prising"
import blockTitle from './../data/blockTitle.json'

function Services() {
    return (
        <div>
             <section id="services">
                <div className="container">
                <h2 className="section-title">{blockTitle.service.title}</h2>

                
                </div>
            </section>
            <Pricing/>
       </div>
    )
}

export default Services