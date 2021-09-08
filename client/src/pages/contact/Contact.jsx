import "./contact.css"
import Sidebar from './../../components/sidebar/Sidebar';
import { useContext, useState } from "react";
import { Context } from './../../context/Context';

function Contact() {
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [success,setSuccess] = useState(false);
    const {user} = useContext(Context);
    return (
        <div className="contact" >
            <div className="contactWrapper">

            <div className="contactTitle">
                    <span className="ContactTextTitle">Contact Me</span>
                    
                </div>
                <form className="contactForm">
               
                
                    <label>Email</label>
                    <input type="text" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Message</label>
                    <textarea  placeholder="Your Message" onChange={e=>setMessage(e.target.value)} > </textarea>
             
                    <button className="contactSubmit" type="submit" >Send</button>
        {success && <span style={{color:'green',textAlign:"center",marginTop:'20px'}} > Mail sent...</span>}
                </form>

            </div>
            <Sidebar/>
        </div>
    )
}

export default Contact
