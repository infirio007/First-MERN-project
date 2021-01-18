const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    email: String,
    password: String
})

module.exports = mongo.model("user", userSchema, "user_data");