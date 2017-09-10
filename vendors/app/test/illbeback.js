module.exports.init = function(app,data_app,next)
{
  console.log("I'll Be Back !!");
  next(app,data_app);
}
