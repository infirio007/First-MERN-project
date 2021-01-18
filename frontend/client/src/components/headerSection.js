import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import './header.css';

const Nav = () => {
    const refer = useRef()
    const [s, set] = useState(false)

    const func = () => {
        if(window.scrollY >= 60){
            set(true)
        }
        else{
            set(false)
        }
    }

    window.addEventListener('scroll', func)

    function hamClicked(e){
        refer.current.classList.toggle("nope")
    }
    return(
        <nav className={s? "normal active": "normal"}>
            <div id="logo">
                <img src="http://localhost:3000/logo_n.png" style={{width: "70px"}} alt="logo"/>
                <p id="ham" className="noselect" onClick={hamClicked}>&#8801;</p>
            </div>
            <ul ref={refer} className="navigation">
            <li className="hover noselect"><Link exact="true" activeclass="current" className="anchor" to="/blogs">Blog</Link></li>
                <li className="hover noselect"><Link exact="true" activeclass="current" className="anchor" to="/contact">Contact us</Link></li>
                <li className="hover noselect"><Link exact="true" activeclass="current" className="anchor" to="/services">Projects</Link></li>
                <li className="hover noselect"><Link exact="true" activeclass="current" className="anchor" to="/about">About us</Link></li>
            </ul>
        </nav>
    )
}

const Header = (props) => {
    var back = {
        background: `url(${props.img}) rgba(0,0,0,0.6)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        backgroundSize: '100vw 100vh'
    }

    var gray = {
        background: `url("http://localhost:3000/back_blog.jpg") rgba(0,0,0,0.3)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
        backgroundSize: '100vw 100vh'
    }

    return(
    <>
        <Nav />
        <section className="headerSection" style={props.img ? back : gray}>
            <h1 className="title">{props.title}</h1>
        </section>
    </>
    )
}

export {Nav};
export default Header;