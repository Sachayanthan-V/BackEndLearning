const userSchema = require("../models/user");
const Post = require('../models/post');


module.exports.home = function (req, res) {

  // res.cookie('user_id', 23);
  // console.log(req.cookies);

  // Post.find( {}, function (err, posts) {
  
  //   return res.render("home", {
  //     title: "sachin's application.",
  //     posts : posts
  //   });

  // }); 

  Post.find({}).populate('user').exec(function(err, posts){
    return res.render('home', {
      title : `Sachin's App`,  
      posts: posts
    })
  })


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
