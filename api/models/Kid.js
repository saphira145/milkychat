/**
* Kid.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		class_id: { type: 'integer', required: true },
  		first_name: { type: 'string', size: 255 },
  		last_name: { type: 'string', size: 255 },
  		dob: {type: 'date', defaultsTo: null},
  		gender: {type: 'string'},
  		nationality: { type: 'string', size: 255 },
  		alergies: {type: 'text'},
  		school: {type: 'string', size: 255},
  		weight: {type: 'float'},
  		height: {type: 'float'},
  		food_specificity: { type: 'string', size: 255},
  		avatar: {type: 'string', size: 255},
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo: 0}
  	}
};

