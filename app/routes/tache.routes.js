const controller = require("../controllers/tache.controller");

module.exports = function(app) {

    app.use(function(req, res, next) {
      req.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    
   app.post("/api/tache/add",controller.create);
   app.delete("/api/tache/delete/:id",controller.delete) ;
   app.put("/api/tache/update/:id",controller.update);
  
   
  };