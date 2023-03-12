function SolutionCardItem(props) {
    const {icon1, title, text} = props 
    return (
        <div className="card">
            <span className={`icon-${icon1}`}></span>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    )
}
export default SolutionCardItem