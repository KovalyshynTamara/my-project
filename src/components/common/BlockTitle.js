
function BlockTitle(props) {
    const { title, subtitle, class1 } = props
   
    return (
        <div className={class1}>
            <h2 className="section-title">{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
        </div>
        
    )
}

export default BlockTitle