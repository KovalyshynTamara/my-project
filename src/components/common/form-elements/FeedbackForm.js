/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react"
import { isValidEmail, toast } from './../../../helpers';
import axios from "axios";
import { BOT_TOKEN, CHAT_ID } from "../../../config";
import TextInput from "./TextInput";

export default function () {
    const [theme, setTheme] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault()
        const errors = []

        if (name === '') {
            errors.push('Enter your name.')
        }
        if (email === '') {
            errors.push('Enter your email.')
        } else {
            if (!isValidEmail(email))
            errors.push('Enter valid email address. ')              
        }

        if (!errors.length) {


            const text = `
<b>Name: </b> ${name}
<b>Email: </b> ${email}
<b>Message: </b> ${message}
<b>Theme: </b> ${theme}
                `

            axios
                .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
                })
                .then(resp => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setTheme('')
                    toast.success('message send successfully')
                })
                .catch(err => {
                    toast.danger('AJAX error. Please try again later')
                })
        } else {
             toast.danger(errors.join(' '))
        }    
    }


    return (
        <form onSubmit={handlerSubmit} id="subscribe-form">
            <TextInput label="Name" value={name} required 
                setInputValue={(val) => {
                    setName(val)
                }}
            />
            <TextInput label="Email" value={email} required 
                setInputValue={(val) => {
                    setEmail(val)
                }}
            />
             <TextInput label="Theme" value={theme} 
                setInputValue={(val) => {
                    setTheme(val)
                }}
            />
            <TextInput label="Message" value={message}
                setInputValue={(val) => {
                    setMessage(val)
                }}
            />
            <div className="r">
                <button type="submit" className="btn">Send</button> 
             </div>
                       
        </form>
    )
}