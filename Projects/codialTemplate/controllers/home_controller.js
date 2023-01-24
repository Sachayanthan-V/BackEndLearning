const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = async function (req, res) {

	try {
		
		let posts = await Post.find({})
			.populate('user')
			.populate({
			path : 'comments',
			populate : {
				path : 'user'
			}
		});

		let users = await User.find({});

		return res.render('home', {
			title : `Sachin's App`,  
			posts: posts,
			all_users : users
		});

	}catch(err){
		console.log(`Error occured on HomeController ${err}`);
	}


};










/*

  // res.cookie('user_id', 23);
  // console.log(req.cookies);

  // Post.find( {}, function (err, posts) {
  
  //   return res.render("home", {
  //     title: "sachin's application.",
  //     posts : posts
  //   });

  // }); 


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