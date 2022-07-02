
const Tache =require("../models/tache.model");
const db = require("../models/index");
let express = require('express');
let app = express();



exports.create = (req, res) => {
  const tache = new Tache(
    {
      name: req.body.name,
    }
  );
  tache
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tache."
      });
    });
};



exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Tache.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update tache with id=${id}. Maybe tache was not found!`
        });
      } else res.send({ message: "tache was updated successfully." });
    })

};


exports.delete = (req, res) => {
  const id = req.params.id;
  Tache.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete tache with id=${id}. Maybe tache was not found!`
        });
      } else {
        res.send({
          message: "tache was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tache with id=" + id
      });
    });
};
