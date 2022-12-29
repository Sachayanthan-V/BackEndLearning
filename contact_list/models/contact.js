const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    phone : { 
        type : String,
        required : true
    }

});


const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;

/*

{
  "_id": {
    "$oid": "63ada9bd82622b39d8763856"
  },
  "name": "Srivarshinisachayanthan",
  "phone": "7714236988",
  "__v": 0
}

*/