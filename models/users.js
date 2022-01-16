'use strict'

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
		id:{
		type:DataTypes.INTEGER,
		autoIncrement: true,
				primaryKey: true
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.NUMBER
	}, {
	tableName:"users"
	});
	users.associate = function(models) {
		users.hasMany(models.item,{
			as:'items',
			foreignKey:'users_id'
		});
	};
  return users;
};