var session = require('express-session');

module.exports.init = function(app,data_app,next)
{  
  app.use(session({
	  secret: 'allyourbasesarebelongtous',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: true }
	}))
  next();
}
