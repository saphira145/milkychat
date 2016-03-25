/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		account_id: { type: 'integer', required: true, size: 11 },
  		device_name: { type: 'string', size: 255 },
  		device_token: {type: 'string', size: 255, unique: true},
  		device_type: { type:'string', size: 100 },
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo: 0}
  	}
};

