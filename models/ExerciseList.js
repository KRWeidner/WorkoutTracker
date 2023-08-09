const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseList extends Model {}

// sequelize ExerciseList data
ExerciseList.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exerciselist',
    }
    );

module.exports = ExerciseList;