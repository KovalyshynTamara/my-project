
function BenefitsItem(props) {
    const {title,text,iconName}= props
    return (
        <div>
             <div className="title"><span className={`icon-${iconName}`}></span>{title}</div>
            <p>{text}</p>
        </div>     
    )
}

export default BenefitsItem