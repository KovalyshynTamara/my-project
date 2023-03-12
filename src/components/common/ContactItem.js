function ContactsItem(props) {
    const {link, name,text} = props
    return (
         <a href={link} target="_blank" rel="noreferrer">
            <span className={`icon-${name}`}></span>
            {text}
        </a>   
    )
}

export default ContactsItem