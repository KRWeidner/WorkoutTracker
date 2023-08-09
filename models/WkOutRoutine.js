const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WkOutRoutine extends Model {}

// sequelize WkOutRoutine data
WkOutRoutine.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'wkoutroutine',
    }
    );

module.exports = WkOutRoutine;