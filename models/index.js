const Vehicle = require('./vehicle');
const Issues = require('./issues');
const User = require('./user')
// end requires  (User is for logins can be used for inputted issues)

// only one of a vehicle exists
Vehicle.hasMany(Issues,{
    foreignKey: 'vehicle_number',
    onDelete: 'CASCADE'
});

//Vehicle can have many issues
Issues.belongsTo(Vehicle,{
    foreignKey: 'vehicle_number'
});

module.exports = {
    Issues,
    Vehicle,
    User
};