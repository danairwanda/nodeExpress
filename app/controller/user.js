var db = require('../../config/db');

function Todo(){

	this.get = function(req,res,next){
		db.acquire(function(err,con){
			if (err) throw err;
				con.query('SELECT * FROM users', function(err,data){
					con.release();
					if(err)
						return res.json({status:'400', message: 'Failed', result:[]});

					return res.json({status:'200', message:'success',result:data});
				});
		});
	};

	this.create = function(req,res){
		connection.acquire(function(err, con){
			con.query('insert into users set ? ', req.body, function(err, result){
				con.release();
				if(err){
					res.send({status: 400, message: 'User creation failed'});
				} else {
					res.send({status: 200, message: 'User created successfully'});
				}
			});
		});
	};

	this.update = function(req,res){
		connection.acquire(function(err, con){
			con.query('update users set ? where id_user = ? ', [req.body, req.body.id_user], function(err, result){
				con.release();
				if(err){
					res.send({status: 400, message: 'User creation failed'});
				} else {
					res.send({status: 200, message: 'User update successfully'});
				}
			});
		});
	};

	this.delete = function(id,res){
		connection.acquire(function(err, con){
			con.query('delete from users where id_user = ?', [id], function(err, result){
				con.release();
				if (err){
					res.send({status: 400, message: 'Failed to delete'});
				} else {
					res.send({status: 200, message: 'Delete successfully'});
				}
			});
		});
	};

}

module.exports = new Todo();