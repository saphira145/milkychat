'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  	db.createTable('kid_summary', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		teacher_id: { type: 'int', notNull: true },
  		kid_id: { type: 'int', notNull: true },
  		water: {type: 'decimal'},
  		milk: { type: 'decimal'},
  		morning_wet: { type: 'int'},
  		morning_soiled: { type: 'int'},
  		afternoon_soiled: { type: 'int'},
  		afternoon_wet: { type: 'int'},
  		tea_snack: { type: 'int'},
  		lunch: { type: 'int'},
  		morning_snack: { type: 'int'},
  		breakfast: { type: 'int'},
  		remarks: {type: 'text'},
  		for_date: {type: 'date', defaultValue: null},
  		mood: {type: 'char', length: 100},
      nap: {type: 'int'},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('kid_summary', {}, callback);
};
