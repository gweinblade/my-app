import { init } from 'ityped'
import { useEffect,useRef } from "react"
import './contact.scss'
import { useState } from 'react';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    

     // handle inputs
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            
          } else {
              let toSend = {
                name,
                email,
                message,
              }
            send(
                'service_5dolrmu',
                'template_ryx8wwt',
                toSend,
                'user_nrdQxVnrsJklJZR55wKNR'
              )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success("your email was sent succesfully");
            })
            .catch((err) => {
                console.log('FAILED...', err);
                toast.error("your email was not sent ");
            });
    
            setName("");
            setEmail("");
            setMessage("");
          }
        
       
        };
    
      
    
    const textref = useRef();
    
    useEffect(()=> {
        init(textref.current, 
            { 
                showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ["Contact ME ", "Leave A Message ","Email  Me" ] })
    }, []);
    return (
        <div className="contact" id="contact" >
          <ToastContainer/>
            <div class="heading-container">
                <div class="screen-heading">
                  <span> Contact Me </span>
                </div>
                <div class="screen-sub-heading">
                  <span> Let's Keep In Touch </span>
                </div>
                <div class="heading-seperator">
                  <div class="seperator-line"></div>
                  <div class="seperator-blob">
                    <div></div>
                  </div>
                </div>
              </div>
            <div className="central-form">
                <div className="col">
                    <h2 class="title">
                    <span ref={textref}></span>

                    </h2>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send your message</h4>
                        <img src="assets/shake.svg" alt="" />
                    </div>
                    <form onSubmit={onSubmit}>
                        <p></p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='from name' value={name} onChange={handleName}/>

                        <label htmlFor="email">Email</label>
                        <input type="email"  name='email' placeholder='Your email' value={email} onChange={handleEmail}/>

                        <label htmlFor="message">Message</label>
                        <textarea
                        type="text"
                        name='message'
                        placeholder='Your message'
                        value={message}
                        onChange={handleMessage}
                      
                        />

                        <div className="send-btn">
                        <button type="submit">
                            Send <i className="fa fa-paper-plane"></i>
                            
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
