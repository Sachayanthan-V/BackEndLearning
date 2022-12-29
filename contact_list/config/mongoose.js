//require the library
const mongoose = require('mongoose');

//connect to the database 
mongoose.connect('mongodb://localhost/contact_list');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error 
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
    console.log("Successfully connected to the database");
});

















// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// //connect to the database
// // mongoose.connect("mongodb://localhost/contact");
// mongoose.connect("mongodb://localhost:27017/contact_list");

// //acquire the connection(to check if it's successful)
// const db = mongoose.connection;

// //error
// db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// //up and running then print the message
// db.once("open", function () {
//   console.log("Successfully connected to the database :: MongoDB");
// });

// module.exports = db;




// // const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost:/contacts_list_db');

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, "Connection Error! : "));

// // db.once('open', function(){
// //     console.log('DB Connection Established!.. ');
// // });