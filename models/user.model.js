// User model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name:  String,
    email: String,
    password: String,
<<<<<<< HEAD

=======
    isAdmin:{
      type:Boolean,
      default:false 
    }
>>>>>>> 54e0128bd466f5a8ccefc188eaa094790d3dc64e
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;