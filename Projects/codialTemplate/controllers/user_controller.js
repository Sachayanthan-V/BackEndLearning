const passport = require('passport');
const User = require('../models/user');

module.exports.profile = function(req, res) {
    return res.render('user_profile', {
        title : 'user profile page'
    });
};

module.exports.signUp = function(req, res) {

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title : "codial sign up"
    });
}

module.exports.destroySession = function(req, res) {
    req.logout( function(err){ console.log('Logout Error : ', err) } );
    return res.redirect('/');
}

module.exports.signIn = function(req, res) {
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    
    return res.render('user_sign_in', {
        title : "codial sign in"
    });
}

// for sign in and sign up 

module.exports.create = function(req, res) {
    if ( req.body.password != req.body.confirm_password ) {
        console.log("Password and confirm password is not matched. Try again...");
        return res.redirect('back');  
    }

    User.findOne( {email : req.body.email}, function(err, user) {

        if(err){console.log(`Error while finding a user during signing up`); return; }
        
        if (!user) {
            User.create( req.body, function(err, user) {
                
                if(err){console.log(`Error while creating a user during signing up`); return; }

                console.log(`New User Account is created successfully!...`);
                return res.redirect('/users/sign-in');

            });
        }

        if (user) {
            console.log(`User Name is already Exists`);
            return res.redirect('back');
        }

    });

}

module.exports.createSession = function(req, res) {
    return res.redirect('/');
}