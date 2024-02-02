const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connect');

class Issues extends Model {}

Issues.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
        },
        vehicle_number:{
            type: DataTypes.INTEGER,
            references: {
                model: 'vehicle',
                key:'vehicle_number',
            },
        },
        description:{
            type: DataTypes.STRING,
            
        },
        issue_status:{
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName:true,
        underscored:true,
        modelName:'issues'
    }
);
module.exports = Issues;