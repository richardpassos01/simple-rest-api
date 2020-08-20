const {
    BranchFactory
} = require('../factories');
const brancheController = BranchFactory.createController();

const loadIn = (
    router,
    controller = brancheController
) => {
    router.get('/branches',
        (...args) => controller.getBranches(...args));
};

module.exports = {
    loadIn
};