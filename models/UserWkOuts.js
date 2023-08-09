const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserWkOuts extends Model {}

// sequelize UserWkOuts data
UserWkOuts.init(
    {

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