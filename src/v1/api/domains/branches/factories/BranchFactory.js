const BranchController = require('./../controllers/BranchController');

const createController = () => {
    const controller = new BranchController();

    return controller;
}

module.exports = {
    createController
}