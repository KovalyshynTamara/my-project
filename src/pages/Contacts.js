import ContactsItem from "../components/common/ContactItem"
import contactsItem from './../data/contactItem.json'
import blockTitle from './../data/blockTitle.json'
import FeedbackForm from "../components/common/form-elements/FeedbackForm"
import ContactsMap from "../components/common/form-elements/ContactsMap"
function Contacts() {
    return (
        <div>
            <div className="pt"></div>
             <section id="contact_info" className="blue-bg">
            <div className="container">
                <div className="info">
                    <h2 className="section-title">{blockTitle.contacts.title}</h2>
                    <h3 className="subtitle">{blockTitle.contacts.subtitle }</h3>
                    {contactsItem.map((item, index) => {
                    return (<ContactsItem  name={item.name}  text={item.text} link={item.link}  key={index} />)
                })}
                </div>
                <FeedbackForm />  
            </div>
                <div id="map" style={{ height: '500px' }}>
                <ContactsMap/>
            </div>
        </section>
        </div>
        
    )
}

export default Contacts