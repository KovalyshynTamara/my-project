import blockTitle from './../data/blockTitle.json'
import aboutItem from './../data/aboutItem.json'
import aboutItemWork from './../data/aboutItemWork.json'
import img1 from './../assets/imgs/imgAbout1.png'
import img2 from './../assets/imgs/imgAbout2.png'
import AboutUsItem from '../components/common/AboutUsItem'
// import NeedHelp from '../components/common/NeedHelp'
import Contacts from './Contacts'

function AboutUs() { 
    return (
        <div>
            <section id="about">
            <div className="container">
                <h2 className="section-title">{blockTitle.about.title}</h2>
                {/* <h3 className='title-1'>{blockTitle.about.sub_text}</h3> */}
                <div className="card">
                    <div>
                        <h3 className="title">{blockTitle.about.sub_title}</h3>
                        <p className="text">{blockTitle.about.text}</p>
                    </div>
                    
                    <div className="img-wrap">
                        <img src={img1} alt="about us" />
                    </div>
                </div>
                <div className="card reverce">
                    <div>
                        <h3 className="title">{blockTitle.about.sub_title2}</h3>
                        <p className="text">{blockTitle.about.text2}</p>
                    </div>
                    <div className="img-wrap">
                        <img src={img2} alt="about us" />
                    </div>
                </div>
                
                <h2 className='title-1 values'>Our Values</h2>
                <p>How We Treat Each Other</p>
                <div className='about_wrap'>
                    {aboutItem.map((item, index) => {
                    return (
                        <AboutUsItem key={index} text={item.text} paragraf={item.paragraf} />
                    )
                })}
                </div>
                <p>How We Treat Our Work</p>
                <div className='about_wrap'>
                    {aboutItemWork.map((item, index) => {
                    return (
                        <AboutUsItem key={index} text={item.text} paragraf={item.paragraf} />
                    )
                })}
                </div>        
            </div>
            </section>
            <Contacts />
        </div>
    )
}
export default AboutUs