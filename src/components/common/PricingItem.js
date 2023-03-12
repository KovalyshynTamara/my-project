// import pricingItem from './../../data/prisingItem.json'
import { Link } from "react-router-dom"
function PrisingItem(props) {
    const {name, price, date, text,one,two,tree, four,check} =props
    return (
        <div className="card">
            <div className="name">{name}</div>
            <div className="price">{price}<span>{date}</span></div>
            <div className="discr">{text}</div>
            <Link to={'/contacts'} className="btn">Get started</Link>
            <div className="subtext"><span className="icon-checkmark"></span>{one}</div>
          <div className="subtext"><span className="icon-checkmark"></span>{two}</div>
          <div className="subtext"><span className="icon-checkmark"></span>{tree}</div>
          <div className="subtext"><span className={`icon-${check}`}></span>{four}</div>
        </div>

    )
}
export default PrisingItem