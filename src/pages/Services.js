import Pricing from "../components/Prising"
import blockTitle from './../data/blockTitle.json'
import servicesItem from './../data/servicesItem.json'
import SolutionCardItem from "../components/SolutionCardItem"
import Numbers from './../components/Numbers'
import NeedHelp from './../components/common/NeedHelp'


function Services() {
    return (
        <div>
             <section id="services" className="blue-bg">
                <div className="container">
                    <h2 className="section-title">{blockTitle.service.title}</h2>
                    <div className="card-wrap">
                        {servicesItem.map((item, index) => {
                            return(<SolutionCardItem title={item.title}  text={item.text} icon1={item.icon1}  key={index} />)
                        })}
                    </div>
                
                
                </div>
            </section>

            <Numbers />
            <Pricing />
            <NeedHelp/>
       </div>
    )
}

export default Services