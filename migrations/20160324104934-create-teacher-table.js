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
  	db.createTable('teacher', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		account_id: { type: 'int', notNull: true },
  		dob: { type: 'date', defaultValue: null },
  		bank_account: { type: 'char', length: 255, unique: true },
  		gender: { type: 'boolean'},
      phone_number: {type: 'char', length: 50},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('teacher', {}, callback);
};
