require('dotenv').config();
const mongoose = require('mongoose');

let database;
let Restaurant;

class BranchController {
    constructor() {
        const mongo = mongoose.connect(process.env.MONGO_SRV, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.database = mongo;
    }

    async getBranches({
        query: {
            id
        }
    }) {
        database = database || await this.database

        const restaurantShcema = new database.Schema({
            name: String,
            lastName: String,
        });

        Restaurant = Restaurant || database.model('Restaurant', restaurantShcema);

        const queryFilter = id ? {
            _id: id
        } : {};

        const item = await Restaurant.find(queryFilter, {
            name: 1,
            _id: 0
        });

        return item;
    }
}

module.exports = BranchController;