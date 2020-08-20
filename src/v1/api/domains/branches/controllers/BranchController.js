class BranchController {
    constructor(params) {
        this.service = params.service;
    }

    async getBranches(req, res) {
        const {
            query: {
                id
            }
        } = req;

        return this.service.getBranches({
                id
            })
            .then(data => res.status(200).json(data))
            .catch(error => console.error(error));

    }
}

module.exports = BranchController;