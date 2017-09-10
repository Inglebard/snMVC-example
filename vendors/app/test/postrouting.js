module.exports.init = function(app,data_app,next)
{
  console.log("Post Routing");
  next(app,data_app);
}
