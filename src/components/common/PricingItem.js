
function PrisingItem(props) {
    const {name, price, date, text,one,two,tree, four,check} =props
    return (
        <div className="card">
            <div className="name">{name}</div>
            <div className="price">{price}<span>{date}</span></div>
            <div className="discr">{text}</div>
            <button className="btn" onClick={toggleMenu}>Get started</button>
            <div className="subtext"><span className="icon-checkmark"></span>{one}</div>
          <div className="subtext"><span className="icon-checkmark"></span>{two}</div>
          <div className="subtext"><span className="icon-checkmark"></span>{tree}</div>
          <div className="subtext"><span className={`icon-${check}`}></span>{four}</div>
        </div>

    )
}
function toggleMenu(){
    document.getElementById("modal").classList.toggle("open")
    document.getElementById("shadow").classList.toggle("show")
}
export default PrisingItem