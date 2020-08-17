class BranchController {
    async getBranches({
        query: {
            id
        }
    }) {
        console.log(id)
        return 'branches';
    }
}

module.exports = BranchController;