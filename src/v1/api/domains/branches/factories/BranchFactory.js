const BranchController = require('./../controllers/BranchController');
const BranchService = require('./../services/BranchService');

const createController = () => {
    const service = createService();

    const controller = new BranchController({
        service
    });

    return controller;
}

const createService = () => {
    const service = new BranchService();

    return service;
}

module.exports = {
    createController
}