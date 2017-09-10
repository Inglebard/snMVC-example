"use strict"

var Message = require('./entities/Message.js');

class MessageModel {

	constructor(db) {
        this._db = db;
        this._collection='messages';
    }
    
    getAll(cb)
    {
		this._db.collection(this._collection).find().toArray(function (error, results) {
		    if (error) throw error;		  
			cb(
				results.map(
					function(res)
					{
						return new Message(res);
					}
				)
			);
		});
    }

}


module.exports = MessageModel;
