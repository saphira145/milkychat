/**
* KidSummary.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		teacher_id: { type: 'integer' },
  		kid_id: { type: 'integer', required: true },
  		water: {type: 'float'},
  		milk: { type: 'float'},
  		morning_wet: { type: 'integer'},
  		morning_soiled: { type: 'integer'},
  		afternoon_soiled: { type: 'integer'},
  		afternoon_wet: { type: 'integer'},
  		tea_snack: { type: 'integer'},
  		lunch: { type: 'integer'},
  		morning_snack: { type: 'integer'},
  		breakfast: { type: 'integer'},
  		remarks: {type: 'text'},
  		for_date: {type: 'date', defaultsTo: null},
  		mood: {type: 'char', size: 100},
      	nap: {type: 'integer'},
  		created_at: { type: 'datetime' },
  		updated_at: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo: 0}
  	}
};

