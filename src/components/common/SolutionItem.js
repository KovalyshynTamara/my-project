import image from './../../assets/imgs/solution-1.png'
import solutionsItem from './../../data/solutionsItem.json'
function SolutionsItem() {
    return (
        <section id="solutions">
            <div className="container">
                <h2 className="section-title">{solutionsItem.title}</h2>
                <div className="wrap">
                    <div>
                        <div className='numb'>{solutionsItem.num}</div>
                        <div className='text'>{solutionsItem.text1}<br />{solutionsItem.text2}</div>
                        <p>{solutionsItem.subText1}</p>
                        <p>{solutionsItem.subText2}</p>
                    </div>
                    <div className='sol'>
                        <img src={image} alt=""/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default SolutionsItem