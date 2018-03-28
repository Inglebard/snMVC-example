var router = require('express').Router();

var MessageController = require("../controllers/MessageController.js");

module.exports.init = function(app,data_app,next)
{
  router.get('/messages', MessageController.getMessages);
  app.use('/', router);
	next();
}
