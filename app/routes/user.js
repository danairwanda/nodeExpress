var user  = require('../controller/user');

module.exports = {
	configure: function(app){
		app.route('/user').get(user.get);
		app.route('/user').put(user.update);
		app.route('/user').post(user.create);
		app.route('/user').delete(user.delete);
	}
};