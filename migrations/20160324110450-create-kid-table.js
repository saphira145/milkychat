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
  	db.createTable('kid', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		class_id: { type: 'int', notNull: true },
  		first_name: { type: 'char', length: 255, notNull: true },
  		last_name: { type: 'char', length: 255, notNull: true },
  		dob: {type: 'date', defaultValue: null},
  		gender: {type: 'char'},
  		nationality: { type: 'char', length: 255 },
  		alergies: {type: 'text'},
  		school: {type: 'char', length: 255},
  		weight: {type: 'decimal'},
  		height: {type: 'decimal'},
  		food_specificity: { type: 'char', length: 255},
  		avatar: {type: 'char', length: 255},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('kid', {}, callback);
};
