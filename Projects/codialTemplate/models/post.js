const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    content : {
        type : String,
        required : true
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'User'
    },

    // include the array of ID's of all the comments in this
    // post schema itself to retriew comments on their own easily.
    comments : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref  : 'Comment'
                }
            ]

}, {
    timestamps : true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;