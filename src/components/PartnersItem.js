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
function PartnersItem() {
    const partner = [
        {img: 'logo_1.png' },
        {img: 'logo_2.png' },
        {img: 'logo_3.png' },
        {img: 'logo_4.png' },
        {img: 'logo_5.png' },
        {img: 'logo_6.png' },
        {img: 'logo_4.png' },
        {img: 'logo_5.png' },
        {img: 'logo_6.png' },
    ]
    const setings = {
        slidesToShow: 6,
        infinite:true,
        dots:false,
        nextArrow:<SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
            breakpoint: 800,
                settings: {
                slidesToShow: 4,
                }
            },
            {
            breakpoint: 600,
                settings: {
                slidesToShow: 2,
                }
            },
            {
            breakpoint: 400,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <div className="partners">
            <Slider {...setings}>
                {partner.map((item,index) => {
                    return (
                        <img src={`/imgs/${item.img}`} alt="Logo" key={index} />  
                    )
                })}
            </Slider>
    </div>        
    )

}
export default PartnersItem