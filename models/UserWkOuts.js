const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserWkOuts extends Model {}

// sequelize UserWkOuts data
UserWkOuts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
          },
          routineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'wrkOutRoutine',
                key: 'id',
              },
          },
          date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userwkouts',
    }
    );

module.exports = UserWkOuts;