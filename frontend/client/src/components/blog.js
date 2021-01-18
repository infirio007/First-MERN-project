import React from "react";
import './blog.css'

const Blog = (props) => {
    var link = props.title;
    var og_link = link.split(" ").join("-");
    return(
        <>
            <div className="blog">
                <div className="blogBox">
                    <div className="intro-content">
                        <h1 className="heading-blog">{link}</h1>
                        <p className="blog-intro">
                        {props.blogContent}
                        </p>
                        <button className="blog-btn"><a href={`http://localhost:3000/blog/${og_link}`}>Read more</a></button>
                    </div>
                    <img src={props.img} className="blog-img" alt="blog image"/>
                </div>
            </div>
        </>
    )
}

export default Blog;