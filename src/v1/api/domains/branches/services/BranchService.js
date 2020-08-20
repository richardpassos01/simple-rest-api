class BranchService {
    constructor(params) {
        this.repository = params.repository;
    }

    async getBranches({
        id
    }) {

        return this.repository.getBranches({
            id
        });
    }
}

module.exports = BranchService;