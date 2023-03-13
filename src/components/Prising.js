import blockTitle from './../data/blockTitle.json'
import pricingItem from './../data/prisingItem.json'
import PrisingItem from './common/PricingItem'
import Modal from './Modal'

function Pricing() {
    return (
        <section id="pricing" className="blue-bg">
            <Modal/>
            <div className="container">
                <h2 className="section-title">{blockTitle.pricing.title}</h2>
            <div className="card-wrap">
                {pricingItem.map((item, index) => {
                        return(<PrisingItem name={item.name}  price={item.price}  date={item.date}  text={item.text} one={item.one}  two={item.two}  tree={item.tree}  four={item.four} check={item.check}  key={index}/>)
                    })}       
            </div>
            </div>
        </section> 
    )
}
export default Pricing