const Mongo = require('./../../../../../database/mongo');

let mongo;

class BranchController {
    constructor() {
        mongo = mongo || new Mongo();
        this.database = mongo;
    }

    async getBranches(req, res) {
        const {
            query: {
                id
            }
        } = req;

        const {
            Restaurant
        } = await this.database.models();

        const queryFilter = id ? {
            _id: id
        } : {};

        const items = await Restaurant.find(queryFilter, {
            name: 1,
            _id: 0
        });

        res.status(200).json(items);

    }
}

module.exports = BranchController;