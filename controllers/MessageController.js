"use strict"

var MessageModel = require("../models/MessageModel.js")

class MessageController {

	static getMessages (req,res,next) {		
	  var Messagemdl= new MessageModel(req.app.get('databases').main_db.db);
	  Messagemdl.getAll(
		  function(messages)
		  {
	  		res.render('messages/index', { title: 'Express', messages: messages });
		  }
	  );
	  
	}

}

module.exports = MessageController;
