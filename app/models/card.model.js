const mongoose = require("mongoose");
const card = mongoose.Schema({

  value:{
    type:Number,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  
},
{ timestamps: true }
);
module.exports=mongoose.model('cards',card);