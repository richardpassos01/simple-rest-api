exports.loadIn = function loadIn(database) {
    const restaurantShcema = new database.Schema({
        name: String
    }, {
        timestamps: true
    });

    database.model('Restaurant', restaurantShcema);
};