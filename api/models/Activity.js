/**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
	    id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		kid_id: { type: 'integer'},
  		class_id: { type: 'integer' },
  		teacher_id: { type: 'integer'},
  		media_file: { type: 'string', size: 255},
  		thumbnail: {type: 'string', size: 255},
  		media_type: {type: 'string', size: 100},
    	message: {type: 'text'},
    	for_date: { type: 'date'},
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo : 0}
  	}
};

