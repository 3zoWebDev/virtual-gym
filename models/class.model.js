// Class model
const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {

    class_title:String,
    class_type:String,
    trainer:String,
    duration:Number,
    startAt:String,
    date:String,
    description:String,
    image:String,

   
  }
);

const Class = mongoose.model("Class", classSchema);


module.exports = Class;
