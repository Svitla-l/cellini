const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        uname:{
            type:String,
            required:true
        },
        uemail:{
            type:String,
            required:true
        },
        upassword:{
            type:String,
            required:true
        }
    }
);
module.exports = mongoose.model('users',userSchema);