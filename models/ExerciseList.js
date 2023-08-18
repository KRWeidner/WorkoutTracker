const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseList extends Model {}

// sequelize ExerciseList data
ExerciseList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          routineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'wrkOutRoutine',
                key: 'id',
              },
          },
          workoutName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          countdownDuration: {
            type: DataTypes.TIME,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'exerciselist',
    }
    );

module.exports = ExerciseList;