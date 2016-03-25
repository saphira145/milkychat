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
  	db.createTable('activity', {
  		id: { type: 'int', primaryKey: true, autoIncrement: true },
  		kid_id: { type: 'int'},
  		class_id: { type: 'int'},
  		teacher_id: { type: 'int'},
  		media_file: { type: 'char', length: 255},
  		thumbnail: {type: 'char', length: 255},
  		media_type: {type: 'char', length: 100},
      message: {type: 'text'},
      for_date: { type: 'date'},
  		createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultValue: 0}
  	}, callback)
};

exports.down = function(db, callback) {
  	db.dropTable('activity', {}, callback);
};
