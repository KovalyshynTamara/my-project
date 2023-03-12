function NumberItem(props) {
    const {title, num}= props
    return (
        <div className="sq">
            <div className="suptitle">{title}</div>
            <div className="num">{num}</div>
      </div>
    )
}

export default NumberItem