const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WkOutRoutine extends Model {}

// sequelize WkOutRoutine data
WkOutRoutine.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          routineName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          routineVersion: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          routineDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
          }
          
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'wrkOutRoutine',
    }
    );

module.exports = WkOutRoutine;