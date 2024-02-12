const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connect');

class Vehicle extends Model {}

// JSON format
// {
//    "vehicle_number": "4231"
//    "vehicle_make": "broke the door off"
//    "vehicle_model":"true"
// }

Vehicle.init(
    {
        vehicle_number:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            
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