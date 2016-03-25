/**
* AccessToken.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'access_token',
  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		access_token: {type: 'string'},
  		account_id: { type: 'integer', required: true, size: 11 },
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		// is_deleted: {type: 'boolean', defaultsTo: 0}
  	},

  	getAccessTokenByAccountId: function(accountId) {
  		return AccessToken.findOne({account_id: accountId});
  	}
};

