const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = function (req, res) {

  // res.cookie('user_id', 23);
  // console.log(req.cookies);

  // Post.find( {}, function (err, posts) {
  
  //   return res.render("home", {
  //     title: "sachin's application.",
  //     posts : posts
  //   });

  // }); 

  Post.find({})
    .populate('user')
    .populate({
      path : 'comments',
      populate : {
        path : 'user'
      }
    })
    .exec(function(err, posts){
      
      User.find( {}, function(err, users) {
        return res.render('home', {
          title : `Sachin's App`,  
          posts: posts,
          all_users : users
        });
      });

  });


  /*
  userSchema.find({}, function (err, content) {
    if (err) {
      console.log(
        `Error is occured in DB in /get function under the home_controller routing.`
      );
      return;
    }
    // console.log(content);
    return res.render("home", {
      title: "sachin's application."
    });
  });
  */


};
