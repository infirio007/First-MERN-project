import {React} from 'react';
import './post.css'

const Post = () => {
    return(
        <>
            <form action="http://localhost:9000/post-blog" method="post" encType="multipart/form-data">
                <div className="form-title">
                    <label>Title: </label>
                    <input type="text" name="title" placeholder="Enter the title of the Blog" className="post-input"/>
                </div>
                <div className="form-author">
                    <label>Author: </label>
                    <input type="text" name="author" placeholder="Enter the name of the author" className="post-input"/>
                </div>
                <div className="form-img">
                    <label>Choose pic: </label>
                    <input type="file" id="img" name="image" accept="image/*" className="post-input"/>
                </div>
                <div className="form-content">
                    <p>text of the blog: </p>
                    <textarea name="blog" placeholder="Enter the content of the Blog"></textarea>
                </div>
                <button type="submit" className="post-submit">Submit</button>
            </form>
        </>
    )
}

export default Post;