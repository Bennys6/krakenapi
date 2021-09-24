'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.associate = function(models) {
        // associations can be defined here
        Department.hasMany(models.User, {
          foreignKey: 'department_id',
          as: 'users',
        });
        Department.belongsToMany(models.Project, {
          through: 'Projectdepartment',
          as: 'projects',
          foreignKey: 'department_id'
        });
      };
    }
  };
  Department.init({
    department_head: DataTypes.STRING,
    department_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};