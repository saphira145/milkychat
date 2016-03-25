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
  	db.createTable('comment', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		account_id: { type: 'int', notNull: true },
  		activity_id: { type: 'int', notNull: true },
  		comment: {type: 'text'},
  		media_type: {type: 'char', length: 100},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('comment', {}, callback);
};
