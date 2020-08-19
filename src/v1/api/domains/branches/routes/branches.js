const BranchController = require('./../controllers/BranchController');
const brancheController = new BranchController();


// const UserFactory = require('../factories/auth');

// const userController = UserFactory.creatreController();

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