const controller = require("../controllers/card.controller");

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
  
    
   app.post("/api/card/add",controller.create);
   app.delete("/api/card/delete/:id",controller.delete) ;
   app.put("/api/card/update/:id",controller.update);
  
   
  };