const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res) {

    let id = req.body.post ;
    id = id.toString().trim(); 
    console.log(id);

    Post.findById( id , function(err, post) {

        console.log(post);

        if(err) {console.log('Could not find the post'); return res.redirect('/'); }

        let newContent = req.body.content;
        let refPost = id;
        let refUser = req.user._id;
        refUser = refUser.toString().trim();

        let newComment = {
            content : newContent ,
            post : refPost,
            user : refUser
        }

        console.log("New Comment ::: ", newComment);

        if(post) {
            Comment.create( newComment , function(err, comment) {

                if(err) {
                    console.log('Comment creating error',err);
                    return res.redirect('/');
                }

                post.comments.push(comment);
                post.save();
                res.redirect('/');
            });
        }

    } );
}