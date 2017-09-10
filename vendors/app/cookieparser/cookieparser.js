var cookieParser = require('cookie-parser');

module.exports.init = function(app,data_app,next)
{  
  app.use(cookieParser());
  next();
}
