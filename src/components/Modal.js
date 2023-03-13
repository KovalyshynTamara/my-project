import FeedbackForm from "./common/form-elements/FeedbackForm"


function Modal() {
    return (
        <div id="modal">
            <button type="button" className="btn-1" onClick={toggleMenu}>
                <span></span>
                <span className="w"></span>
            </button>
            <h2 className="title">Pricing</h2>
            <p>Fill up the form and our Team <br /> will get back to you with 25 hours.</p>
            <FeedbackForm />
            <span>*Enter the subscription plan in the Theme field</span>
            <div id="shadow" onClick={toggleMenu}></div>
        </div>
    
    )
}
function toggleMenu(){
    document.getElementById("modal").classList.toggle("open")
    document.getElementById("shadow").classList.toggle("show")
}
    
export default Modal