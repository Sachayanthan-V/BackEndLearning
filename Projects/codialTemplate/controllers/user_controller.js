const passport = require('passport');
const User = require('../models/user');

module.exports.profile = function(req, res) {

    User.findById(req.params.id, function(err, user) {
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user : user
        });
    });

    // return res.render('user_profile', {
    //     title : 'user profile page'
    // });
};

module.exports.profileMine = function(req, res) {

    return res.render('my_profile', {
        title : 'My Profile'
    });
};


module.exports.update = function(req, res) {
    if(req.user.id == req.params.id) {
        User.findByIdAndUpdate( req.params.id, req.body, function(err, user){
            if(err) {console.log('Error updating profile'); return res.redirect('back');}
            console.log('Profile Updated');
            return res.redirect('back');
        });
    }
    else {
        return res.status(401).send('Unauthorized');
    }
}

module.exports.signUp = function(req, res) {

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title : "codial sign up"
    });
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
    req.flash('success', 'Logged in successfully');
    return res.redirect('/');
}


module.exports.destroySession = function(req, res) {
    req.flash('success', 'Logged out successfully');
    req.logout( function(err){ console.log('Logout Error : ', err) } );
    // req.session.destroy();
    return res.redirect('/');
}