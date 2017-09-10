module.exports = {
	mode: 'prod',
	port: 4000,
	pre_app: [
		"./vendors/app/test/preappfirst.js",
	],
	databases : [
		{
		    type:"Mongodb",
		    user:"",
		    password:"",
		    database_name:"main_db",
		    url:"mongodb://localhost:27017/myapp",
		    init_file:'./vendors/core/mongo/mongo.js'
		},
	],
	in_app : {
		pre_routing : [
		"./vendors/app/express/express.js",
		"./vendors/app/express/express-session.js",
		"./vendors/app/morgan/morgan.js",
		"./vendors/app/cookieparser/cookieparser.js",
		"./vendors/app/bodyparser/bodyparser.js",
		"./middlewares/app/toast/toast.js",
		],
		post_routing : [		
		"./vendors/app/test/postrouting.js",
		],
	},
	post_app: [
	"./vendors/app/test/illbeback.js",
	]
}
