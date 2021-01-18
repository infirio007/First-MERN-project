import React from 'react';
import Header from '../components/headerSection';
import Footer from "../components/web_footer";
import './about.css'

const About = () => {
    document.title = "About | INFIRIO"
    return(
        <>
            <Header title="About us" img="about.jpeg"/>
            <div className="my-intro">
                <h1 className='abot' style={{textAlign: "center", position: "absolute", top: "7%"}}>ABOUT ME</h1>
                <div>
                <h1>WHO I AM?</h1>
                <p>
                    Namaste, for a short intro, My name is Krish Jitendra Gupta. I was born in year 2006. I am a from India. Programming is my hobby.
                </p>
                </div>
                <div>
                <h1>HOW I WAS INTRODUCED TO PRGRAMMING?</h1>
                <p>
                    When I was studing in class 6 I got a html book and at that time I was having a dream to make my own game from programming so I thought that I can make a game with it so i learned html, but i acknowlegde that it is not enough so I learned different programming language and it is still going.
                </p>
                </div>
            </div>
            <div className="stats">
                <h1>SKILL SETS</h1>
                <h2>Python</h2>
                <span></span>
                <h2>HTML</h2>
                <span></span>
                <h2>CSS</h2>
                <span></span>
                <h2>NODEJS</h2>
                <span></span>
                <h2>REACT JS</h2>
                <span></span>
                <h2>C++</h2>
                <span></span>
            </div>
            <Footer />
        </>
    )
}

export default About;