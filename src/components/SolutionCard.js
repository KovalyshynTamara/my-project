import solCardItem from './../data/solCardItem.json'
import SolutionCardItem from './SolutionCardItem'
import blogItem from './../data/blockTitle.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <button type='button' onClick={onClick} id='btn-prev' ><span className='icon-arrow_right'></span></button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
     <button onClick={onClick} type='button' id='btn-next'><span className='icon-arrow_right'></span></button>
  );
}
function SolutionCard() {
    const setings = {
        slidesToShow:3,
        infinite:true,
        dots:true,
        nextArrow:<SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
         responsive: [
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
            breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                }
            }
         ]
    }
    return (
        <section id='our_solutions' className="blue-bg">
            <div className="container">
                <h2 className='section-title'>{blogItem.solutions.title}</h2>            
                <div className="card-wrap">
                    <Slider {...setings}>
                    {solCardItem.map((item,index) => {
                    return (<SolutionCardItem icon1={item.icon1} text={item.text} title={item.title} key={index} />)
                    })}
                    </Slider>
               
                </div>
            </div>  
        </section>
    )
}

export default SolutionCard


