var logger = require('morgan');

module.exports.init = function(app,data_app,next)
{  
  app.use(logger('dev'));
  next();
}
