/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs');

module.exports = {

  	attributes: {
  		id: { type: 'integer', primaryKey: true, autoIncrement: true },
  		email: { type: 'string', size: 255, unique: true },
  		password: { type: 'string', size: 255 },
  		first_name: { type: 'string', size: 255 },
  		last_name: { type: 'string', size: 255},
  		createdAt: { type: 'datetime' },
  		updatedAt: { type: 'datetime' },
  		is_deleted: {type: 'boolean', defaultsTo: 0},

        toJSON: function () {
            var obj = this.toObject();

            delete obj.password;
            return obj;
        }
  	},

    beforeCreate: function (account, callback) {
        bcrypt.genSalt(10, function (error, salt) {
            bcrypt.hash(account.password, salt, function (error, hash) {
                if (error) {
                    callback(error);
                } else {
                    account.password = hash;
                    callback(null, account);
                }
            });
        });
    },

    findByEmail: function(email) {
        return Account.findOne({email: params.email.trim(), is_deleted: {'!' : 1} } );
    }
};

