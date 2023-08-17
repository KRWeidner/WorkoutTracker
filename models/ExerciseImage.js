const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseImage extends Model {}

ExerciseImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'exerciselist',
                key: 'id',
              },
          },
          photo_link: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'exerciseimage',
    }
    );

module.exports = ExerciseImage;