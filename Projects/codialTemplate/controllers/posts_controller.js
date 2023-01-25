const Post = require('./../models/post');
const Comment = require('./../models/comment');

module.exports.create = async function(req, res){
    
    try {
        let post = await Post.create({
            content : req.body.content,
            user : req.user._id 
        });

        console.log(post);

        if(req.xhr) {
            return res.json(200, {
                data : {
                    post : post
                },
                message : "Post Created!"
            });
        }
        else {
            console.log('no post xhr');
        }

        req.flash('success', 'Post published');
    }catch(err) {
        req.flash('error', err);
        console.log('Error Occured in post Controller CREATE!!!', err);
    }

    return res.redirect('back');
}

module.exports.destroy = async function( req, res ) {
    // .id means converted version of ._id automatically
    // given by the mongoose. 

    try {
        let post = await Post.findById(req.params.id);
        if(post.user == req.user.id) {
            post.remove();
    
            await Comment.deleteMany( {post : req.params.id});
            return res.redirect('back');
        } else {
            return res.redirect('back');
        }
    }
    catch(err) {
        console.log(`Error occured in post controller DESTROY :: ${err}`);
    }


}