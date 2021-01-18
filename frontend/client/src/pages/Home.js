import {React, useState} from 'react';
import Header from '../components/headerSection';
import Blog from '../components/blog';
import Footer from "../components/web_footer";

const Home = () => {
    document.title = "Home | INFIRIO"
    var [arr, setarr] = useState([])
    fetch("http://localhost:9000/blogs")
        .then(res => {return res})
        .then(res => {
            return res.json();
        })
        .then(res => {
            setarr(res);
        })
    return(
        <>
            <Header title="Blogs" img="blogbg.jpg"/>
            <h1 style={{textAlign: "center", paddingTop: "20px"}} className="bh1">Blogs you can read</h1>
            {arr.map((val, i) => {
                return <Blog title={val.title} img={`http://localhost:9000/${val.pic}`} blogContent={val.blogContent}/>
            })}
            <Footer/>
        </>
    )
}

export default Home;