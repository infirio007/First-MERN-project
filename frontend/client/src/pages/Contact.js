import React from 'react';
import Header from '../components/headerSection';
import Footer from "../components/web_footer";
import "./contact.css";

const Contact = () => {
    document.title = "Contact | INFIRIO"
    return(
        <>
            <Header title="Contact us" img="Lighthouse.jpg"/>
            <h1 id="contact-heading">Why you can contact me?</h1>
            <p id="contact-para">
                You can contact me for amazing projects and also for building a website
                as a freelance work. you can also follow me on social media for amazing 
                projects, leaarning something new and tips for coding and programming
            </p>
            <h1 id="contact-heading">Where can you contact me?</h1>
            <div className="contact-options">
                <a href="https://in.linkedin.com/">
                    <div className="contact-option contact-linkedin">
                        <img src="linkedin.jpg" className="contact-img" alt="linkedin"/>
                        <h2 className="contact-addr">Krrish Jeetendra Gupta</h2>
                    </div>
                </a>

                <a href="https://mail.google.com/">
                    <div className="contact-option contact-email">
                        <img src="email.jpg" className="contact-img" alt="email"/>
                        <h2 className="contact-addr">Infirio@gmail.com</h2>
                    </div>
                </a>
            </div>
            <h1 id="contact-heading">You Can Follow Me.</h1>
            <div className="contact-options">
                <a href="https://facebook.com/">
                    <div className="contact-option contact-facebook">
                        <img src="facebook.jpeg" className="contact-img" alt="facebook"/>
                        <h2 className="contact-addr">Infirio</h2>
                    </div>
                </a>
                <a href="https://github.com/infirio">
                    <div className="contact-option contact-github">
                        <img src="github.jpg" className="contact-img" alt="github"/>
                        <h2 className="contact-addr">Infirio</h2>
                    </div>
                </a>
            </div>
            <Footer />
        </>
    )
}

export default Contact;