const { timeStamp } = require("console");
const mongoose = require("mongoose")
const { Schema, model } = mongoose;

   mongoose.connect("mongodb+srv://vinaypandey46158:pandey557@mern-blog.vceuh.mongodb.net/");
    


const UserSchema = new Schema({
    username: {
        type: String, required: true,
        min: 4,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const PostSchema = new Schema({
    title:String,
    summary: String,
    content: String,
    cover: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'}, 
},{
        timeStamp: true
    
})


const User = model("User", UserSchema);
const Post = model("Post", PostSchema);

module.exports= {
    User, 
    Post
}