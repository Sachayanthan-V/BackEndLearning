const userSchema = require("../models/user");

module.exports.home = function (req, res) {

  res.cookie('user_id', 23);
  console.log(req.cookies);

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
};
