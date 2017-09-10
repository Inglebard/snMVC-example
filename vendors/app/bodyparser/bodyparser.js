var bodyParser = require('body-parser');

module.exports.init = function(app,data_app,next)
{  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  next();
}
