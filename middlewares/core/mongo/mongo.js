module.exports.addMongodb = function(app,db)
{
  app.use(function(req,res,next){
      req.db = db;
      next();
  });
}
