const controller = require("../controllers/estimation.controller");

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
  
    
   app.post("/api/estimation/add",controller.create);
//    app.delete("/api/card/:id",controller.delete) ;
//    app.put("/api/card/:id",controller.update);
  
   
  };