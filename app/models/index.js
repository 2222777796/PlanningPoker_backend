const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbConfig = require("../config/db.config.js");

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.reunion = require("./reunion.model.js")(mongoose);
db.card = require("./card.model")(mongoose);
db.user = require("./user.model")(mongoose);
db.estimation = require("./estimation.model")(mongoose);
db.tache = require("./tache.model")(mongoose);
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;


