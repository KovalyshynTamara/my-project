import image from './../../assets/imgs/section1.png'
function FirstSection() {
    return (
        <section className="bg">
            <div className="container">
            <div className="text">
                <h1>Find true power in your data with Ensome</h1>
                <p>Embedding analytics into your enterprise software application can bring huge benefits to your product.</p>
            <p></p>
            </div>
            <div className="image">
                <img src={image} alt=""/>
            </div>
            </div>
        </section>
    )
}

export default FirstSection