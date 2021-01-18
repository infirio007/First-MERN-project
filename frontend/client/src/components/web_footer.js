import { React } from "react";
import "./web_footer.css";

const Footer = () => {
    return(
        <>
            <footer>
                <h1 id="logo-foot">INFIRIO</h1>
                <p id="qoute">“Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”</p>
                <h1 id="follow">FOLLOW ME ON</h1>
                <div className="icons">
                    <h3><a id="facebook" href="https://www.facebook.com/">FACEBOOK</a></h3>
                    <h3><a id="github" href="https://www.github.com/">GIT HUB</a></h3>
                </div>
                <h3 id="slogan">Keep learning, Keep growing</h3>
            </footer>
        </>
    )
}

export default Footer;