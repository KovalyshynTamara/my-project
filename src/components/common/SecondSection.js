import im1 from './../../assets/imgs/s1-block1.png'
import im2 from './../../assets/imgs/s1-block2.png'
import blockTitle from './../../data/blockTitle.json'
import { Link } from 'react-router-dom'

function SecondSection() {
    return (
        <section id="second-section" className="blue-bg">
    <div className="container">
      <div className="block-wrap">
        <div className="info">
              <h2 className="section-title">{blockTitle.info.title}</h2>
          <p>{blockTitle.info.text}</p>
          <Link to={'/services'} className="btn">Learn more</Link>
        </div>
        <div className="photo">
          <img src={im1} alt=""/>
        </div>
      </div>

      <div className="block-wrap reverse">
        <div className="info">
          <h2 className="section-title">{blockTitle.info1.title}</h2>
          <p>{blockTitle.info1.text}</p>
          <Link to={'/solutions'} className="btn">Learn more</Link>
        </div>
        <div className="photo">
          <img src={im2} alt=""/>
        </div>
      </div>
    </div>
  </section>
    )
}
export default SecondSection