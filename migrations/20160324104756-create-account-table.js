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
  	db.createTable('account', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		email: { type: 'char', length: 255, unique: true },
  		password: { type: 'char', length: 255 },
  		first_name: { type: 'char', length: 255 },
  		last_name: { type: 'char', length: 255 },
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('account', {}, callback);
};
