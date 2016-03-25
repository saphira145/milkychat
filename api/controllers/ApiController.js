/**
 * ApiControllerController
 *
 * @description :: Server-side logic for managing Apicontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');
var appConfig = sails.config.appConfig;
var Q = require('q');

module.exports = {
	
	login: function(req, res) {
		var params = req.params.all();
		var errorCode = appConfig.api.error_code;

		Account.findByEmail(params.email.trim())
			.then(function(account) {
				var account = account[0];
				if (!account) {
					return res.json({status: 'error', error_code: errorCode.userNotFound, error_message: 'Account email is not exists'});
				}
				
				if (!bcrypt.compareSync(params.password, account.password)) {
					return res.json({status: 'error', error_code: errorCode.wrongPassword, error_message: 'Password is not valid'});	
				}

				return account;
			})
			.then(function(account) {
				// console.log(params.type.trim() == 'parent')
				if (params.type.trim() == 'parent') {
					Q.all([
						// AccessToken.getAccessTokenByAccountId(account.id),
						Parent.getParentByAccountId(account.id)

					])
					.spread(function(accessToken, parent) {
						console.log(1)
						console.log(parent);
					})
					.catch(function(err) {
						throw new Error(err);
					})
				}

				if (params.type.trim() == 'teacher') {
					Q.all([
						AccessToken.getAccessTokenByAccountId(account.id),
						Teacher.getParentByAccountId(account.id)

					])
					.spread(function(accessToken, teacher) {
						console.log(teacher);
					})
					.catch(function(err) {
						throw new Error(err);
					})
				}
			})
			.catch(function(err) {
				console.log(err)
				return res.json({status: 'error', error_code: errorCode.serverError, error_message: 'Server error'});	
			})


	}
};

