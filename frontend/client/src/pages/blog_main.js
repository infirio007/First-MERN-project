import {React, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Header from '../components/headerSection';
import Footer from "../components/web_footer";
import "./blog.css";

const Blog_main = () => {
    const {title} = useParams();
    const [blog, setblog] = useState([{}])
    const [log, setlog] = useState([])
    const [img, setimg] = useState("")
    const request = async () => {
        const response = await fetch(`http://localhost:9000/blog/${title}`);
        const json = await response.json();
        const con = await json.blogContent
        const image = await json.pic
        setimg(image.split("//")[0])
        setlog(con.split("\n"))
        setblog(json);
    }
    request();
    document.title = `${blog.title} | INFIRIO`

    return(
        <>
            <Header title={blog.title}/>
                <div className="parent-div">
                    <img id="blog-img" src={`http://localhost:9000/${img}`} />
    
                    {log.map((val) => {
                        return (
                            <>
                                <div className="div-content">
                                    <p className="content">{val}</p>
                                    <br/>
                                </div>
                            </>
                        )
                    })}
                </div>
            <Footer />
        </>
    )
}

export default Blog_main;