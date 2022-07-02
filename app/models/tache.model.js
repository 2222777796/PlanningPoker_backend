const mongoose = require("mongoose");
const tache = mongoose.Schema({

  name:{
    type:String,
    required:true
  }
},
{ timestamps: true }
);
module.exports=mongoose.model('tache',tache);