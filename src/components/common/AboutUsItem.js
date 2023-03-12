function AboutUsItem(props) {
    const { text, paragraf} = props
    return (
        <div className="aboutItem">
            <div className="text"> {text} </div>
            <div className="paragraf">{paragraf}</div>
       </div>
    )
}
export default AboutUsItem