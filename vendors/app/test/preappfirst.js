module.exports.init = function(app,data_app,next)
{
  console.log("PreApp");
  next(app,data_app);
}
