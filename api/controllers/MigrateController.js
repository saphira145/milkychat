/**
 * MigrateController
 *
 * @description :: Server-side logic for managing migrates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');
var async = require('async');

module.exports = {
	createAccount: function(req, res) {

		async.waterfall([
			function createAccount(callback) {
				Account.create([
					{
						id: 1,
						email: 'parent_1@gmail.com',
						password: '123456',
						first_name: 'parent_1 First',
						last_name: 'parent_1 last',
					},
					{
						id: 2,
						email: 'parent_2@gmail.com',
						password: '123456',
						first_name: 'parent_2 First',
						last_name: 'parent_2 last',
					},
					{
						id: 3,
						email: 'teacher_1@gmail.com',
						password: '123456',
						first_name: 'teacher_1 First',
						last_name: 'parent_1 last',
					},
					{
						id: 4,
						email: 'teacher_2@gmail.com',
						password: '123456',
						first_name: 'teacher_2 First',
						last_name: 'parent_2 last',
					}
				])
				.then(function() {
					callback(null);
				})
			},
			function createTeacherAndParent(callback) {

			},

			function createAccessToken(callback) {
				AccessToken.create([
					{
						access_token: 'access_token_parent_1',
						account_id: 1
					},
					{
						access_token: 'access_token_parent_2',
						account_id: 2
					},
					{
						access_token: 'access_token_teacher_1',
						account_id: 3
					},
					{
						access_token: 'access_token_teacher_2',
						account_id: 4
					}
				])
				.then(function() {
					callback(null);
				})
			},

		], function(err, result) {
			console.log('done');
		});
			
	},


};

