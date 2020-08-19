require('dotenv').config();
const Mongo = require('./../database/mongo');

let mongo;

class BranchController {
    constructor() {
        mongo = mongo || new Mongo();
        this.database = mongo;
    }

    async getBranches({
        query: {
            id
        }
    }) {

        const {
            Restaurant
        } = await this.database.models();

        const queryFilter = id ? {
            _id: id
        } : {};

        return Restaurant.find(queryFilter, {
            name: 1,
            _id: 0
        });
    }
}

module.exports = BranchController;