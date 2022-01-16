'use strict'

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
		id:{ type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		name:{ type: DataType.STRING, allowNull: false },
		email:{ type: DataType.STRING, unique: true, allowNull: false },
		phone:{ type: DataType.INTEGER, allowNull: false }
	}, {
	tableName:"users1"
	});
	users.associate = function(models) {
		users.hasMany(models.item,{
			as:'items',
			foreignKey:'users_id'
		});
	};
  return users;
};