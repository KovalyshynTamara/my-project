import BenefitsItem from "./common/BenefitsItem"
import benefItem from './../data/benefItem.json'
import image from './../assets/imgs/s4-1.png'
import blockTitle from './../data/blockTitle.json'

function Benefits() {
    return (
         <section id="section-4">
            <div className="img">
                <img src={image} alt=""/>
            </div>
            <div className="benefits">
            <h2 className="section-title"> {blockTitle.benefits.title} </h2>
            {benefItem.map((item, index) => {
                return(<BenefitsItem title={item.title}  text={item.text} iconName={item.iconName}  key={index} />)
            })}
            </div>
            
            
        </section>
    )
}
export default Benefits