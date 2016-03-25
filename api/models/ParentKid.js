/**
* ParentKid.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		parent_id: { type: 'integer', required: true },
  		kid_id: { type: 'integer', required: true },
  		relation_name: {type: 'string', size: 100},
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  	}
};

