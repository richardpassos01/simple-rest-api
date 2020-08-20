class BranchRepository {
    constructor(params) {
        this.database = params.mongo;
    }

    async getBranches({
        id
    }) {
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

        return items;
    }
}

module.exports = BranchRepository;