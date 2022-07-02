
const Card =require("../models/card.model");
const db = require("../models/index");
let express = require('express');
let app = express();



exports.create = (req, res) => {
  const card = new Card(
    {
      value: req.body.value,
      type: req.body.type,
    }
  );
  card
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



exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Card.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update card with id=${id}. Maybe card was not found!`
        });
      } else res.send({ message: "card was updated successfully." });
    })

};


exports.delete = (req, res) => {
  const id = req.params.id;
  Card.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete card with id=${id}. Maybe card was not found!`
        });
      } else {
        res.send({
          message: "card was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete card with id=" + id
      });
    });
};
