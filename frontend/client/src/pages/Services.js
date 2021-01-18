import {React, useState} from 'react';
import Header from '../components/headerSection';
import Footer from "../components/web_footer";
import './services.css';

const Services = () => {
    document.title = "Projects | INFIRIO";
    const [repos, setrepos] = useState([])
    fetch("https://api.github.com/users/infirio007/repos")
    .then((data) => {return data.json()})
    .then(repos => {setrepos(repos)})

    return(
        <>
            <Header title="Projects" img="projects.jpg"/>
            <h1 id="pro-heading">Projects (github)</h1>
            <div className="repos">
                {repos.map(val => {
                    return (
                        <div className="repo">
                            <a href={val.html_url} target="_blank">
                                <img src="github.jpg"/>
                                <h1>{val.name}</h1>
                            </a>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Services;