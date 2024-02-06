const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connect');

class Vehicle extends Model {}

Vehicle.init(
    {
        vehicle_number:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        vehicle_make:{
            type:DataTypes.STRING
            
        },
        vehicle_model:{
            type:DataTypes.STRING
           
        }

        
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName: 'vehicle'
    }
);

module.exports = Vehicle;