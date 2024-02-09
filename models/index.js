const Vehicle = require('./vehicle');
const Issues = require('./issues');
const User = require('./user')
Vehicle.hasMany(Issues,{
    foreignKey: 'vehicle_number',
    onDelete: 'CASCADE'
});

Issues.belongsTo(Vehicle,{
    foreignKey: 'vehicle_number'
});

module.exports = {
    Issues,
    Vehicle,
    User
};