var router = require('express').Router();

var MessageController = require("../controllers/MessageController.js");

router.get('/messages', MessageController.getMessages);

module.exports = router;
