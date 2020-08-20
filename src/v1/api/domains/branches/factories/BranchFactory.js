const BranchController = require('./../controllers/BranchController');
const BranchService = require('./../services/BranchService');
const BranchRepository = require('./../repositories/BranchRepository');

const Mongo = require('./../../../../../database/mongo');

let mongo;

const createController = () => {
    const service = createService();

    const controller = new BranchController({
        service
    });

    return controller;
}

const createService = () => {
    const repository = createRepository();

    const service = new BranchService({
        repository
    });

    return service;
}

const createRepository = () => {
    mongo = mongo || new Mongo();

    const repository = new BranchRepository({
        mongo
    });

    return repository;
}

module.exports = {
    createController
}