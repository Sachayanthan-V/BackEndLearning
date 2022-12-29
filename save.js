const express = require('express');
const path = require('path');
const port = 8000;


const db = require('./config/mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use( express.urlencoded() );  
app.use(express.static('assets'));  

var contactList = [

    {
        name: 'arphan',
        phone: '11111111111',
    },  

    {
        name: 'iron Stark',
        phone: '465468798',
    },

    {
        name: "sachin",
        phone:  '1465465482416'
    }

]

app.use(function(req, res, next){
    console.log("middle ware 1");
    next();
});

app.get( '/', (req, res)=> {
    res.render('home', { 
        title : 'indha title is not static', 
        contact_list : contactList
    }); 
}); 
 
app.get('/practise', (req, res)=> {
    return res.render('practise', { 
        title : "Practise",
    })
}) 

app.get('/delete-contact/', function(req, res){

    console.log("query" , req.query);
    let findIndex = contactList.findIndex( contact => req.query.phone==contact.phone );
    console.log("Before : ", findIndex, " : ", contactList);
    if ( findIndex != -1 ) {
        contactList.splice(findIndex, 1);
    }
    console.log(contactList);
    res.redirect('back');
});

app.post('/contact-list', (req, res) => {
    if (req.body.name != '' && req.body.phone != ''){
        contactList.push(req.body);
    }
    res.redirect('./');
});

app.listen( port, (err)=>{
    if (err) {
        console.log("Error : ",err);
        return;
    }
    console.log(`This server is running and up with the port : ${port}`);
});

