const{Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connect');

// will check the bcrypted password when compared
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

// JSON format
// {
//    "user_name": "Eden"
//    "email": "goatsRcool@gmail.com"
//    "password":"password12345"
// }

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true,
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        },
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            },
        },
    },
    {
        hooks: {
            // password hashes
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
          },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'user'
    }
);

module.exports = User;