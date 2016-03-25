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
  	db.createTable('parent_kid', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		parent_id: { type: 'int', notNull: true },
  		kid_id: { type: 'int', notNull: true },
  		relation_name: {type: 'char', length: 100},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('parent_kid', {}, callback);
};
