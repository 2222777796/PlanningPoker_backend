const mongoose = require("mongoose");

const vote = mongoose.Schema({
 
 id:{
type:String,
required:true
 },
 cardId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cards"
    }
  ],
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  estId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "estimation"
    }
  ]
});

module.exports=mongoose.model('vote',vote);