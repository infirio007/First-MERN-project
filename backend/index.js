const express = require("express");
const bparser = require("body-parser")
const cors = require("cors")
const mongo = require("mongoose")
const user = require("./models/user.model")
const blog = require("./models/blog.model")
const path = require("path")
const multer = require("multer");
const app = express();

app.use(cors())
app.use("/blog_images", express.static("blog_images"))
app.use(bparser.json())
app.use(bparser.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null, "blog_images/")
    },
    filename: function(req, file, callBack){
        callBack(null, file.originalname);
    }
})

const filter = (req, file, callBack) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg"){
        callBack(null, true);
    }
    else{
        callBack(null, false);
    }
}

const blogPic = multer({storage: storage, fileFilter: filter})

app.get("/blog/:title", (req, res) => {
    // console.log()
    let param = req.params.title.split('-').join(" ");
    // console.log(param)

    blog.find({title: `${param}`}, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(data);
            pic = data[0].pic.replace('\\', '/');
            d = {
                author: data[0].author,
                title: data[0].title,
                pic: pic,
                blogContent: data[0].blogContent
            }
            
            // console.log(d)
            res.json(d);
            res.end();
        }
    })
});

app.get("/blogs", (req, res) => {
    blog.find((err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
            res.end();
        }
    })
});

mongo.connect("mongodb+srv://infirio3566:infirio3566@cluster0.nbmqq.mongodb.net/register?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true  }, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Database connected.")
    }
});

app.post("/sign-in", (req, res) => {
    if(req.body.email != undefined)
        console.log("this is the email you registered " + req.body.email);
        res.redirect("http://localhost:3000/");
    res.end();
})

app.post("/post-blog", blogPic.single("image"), (req, res) => {
    // console.log(req.file)
    const blog_data = new blog({
        title: req.body.title,
        author: req.body.author,
        pic: req.file.path,
        blogContent: req.body.blog,
    })

    blog_data.save((err, product) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(product);
            res.redirect("http://localhost:3000/");
        }
    })
})

app.listen(9000, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Server Started...")
    }
})