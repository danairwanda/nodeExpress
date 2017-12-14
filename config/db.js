var mysql = require('mysql');
function Connection(){
	
	this.pool = null;

	var conn = {
		host 		: 'localhost',
		user 		: 'root',
		password	: '',
		database	: 'nodemysql'
	};

	this.init 		= function(){
		this.pool 	= mysql.createPool(conn);
	}

	this.acquire 	= function(callback){
		this.pool.getConnection(function(err, connection){
			callback(err, connection);
		});
	};

}

module.exports = new Connection();