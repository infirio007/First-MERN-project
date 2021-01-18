const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Krish Jitendra Gupta"
    },
    pic: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    },
})

module.exports = mongo.model("blog", userSchema, "blog_data");