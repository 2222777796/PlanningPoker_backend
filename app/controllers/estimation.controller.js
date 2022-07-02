const Estimation =require("../models/estimation.model");
const re =require("../controllers/reunion.controller");
//const Reunion =require("../m")
const db = require("../models/index");
let express = require('express');
let app = express();


exports.create = (req, res) => {
    var r=re.getReunionByID(req.body.id);
    
 
    const estimation = new Estimation(
      {
        name: req.body.name,
        Idreunion:r
        
      }
    );
    estimation
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the card."
        });
      });
  };