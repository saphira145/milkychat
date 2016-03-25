/**
* Teacher.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		account_id: { type: 'integer', required: true },
  		dob: { type: 'date', defaultsTo: null },
  		bank_account: { type: 'string', size: 255, unique: true },
  		gender: { type: 'boolean'},
      	phone_number: {type: 'string', size: 50},
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo: 0}
  	},

    getParentByAccountId: function(accountId) {
        return Teacher.findOne({account_id: accountId});
    }
};

